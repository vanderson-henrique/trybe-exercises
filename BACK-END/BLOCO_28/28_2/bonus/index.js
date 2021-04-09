const express = require('express');
const multer = require('multer');
const fs = require('fs/promises');
const path = require('path');

const app = express();

const upload = multer({ dest: 'uploads' });

// Caso o arquivo ou o nome não sejam enviados, a API deve retornar erro com status 422 - UNPROCESSABLE ENTITY .
const verifyData = async (req, res, next) => {
  const { file } = req;
  const { fileName } = req.body;

  if (!file || !fileName) {
    // Se o arquivo vier com alguma informação faltando, ele é removido da pasta através do nome
    // gerado pelo multer
    await fs.unlink(`uploads/${req.file.filename}`);
    next({ status: 422, message: 'Arquivo e nome devem ser enviados' })
  }
  next();
}

// Se um arquivo com o nome informado já existir, a API deve retornar erro com status HTTP 409 - CONFLICT .
const verifyDuplicity = async (req, res, next) => {
  const { fileName } = req.body;
  const files = await fs.readdir('uploads', 'ascii');

  const fileExists = files.some((file) => fileName === file);

  if (fileExists) {
    // Se o nome já existir, este comando remove o arquivo adicionado com o nome padrão do multer antes que 
    // ele seja renomeado pela função fs.rename. Logo o arquivo não será sobrescrito
    await fs.unlink(`uploads/${req.file.filename}`);
    next({ status: 409, message: 'Nome do arquivo já existente' });
  }

  next();
}

// Ter um endpoint que receba, além do arquivo num campo file , o nome do arquivo num campo fileName .
app.post('/files', upload.single('file'), verifyData, verifyDuplicity, async (req, res) => {
  const { fileName } = req.body;
  const { file } = req;

  // Salvar o arquivo na pasta uploads , com o nome enviado no campo fileName 
  await fs.rename(`uploads/${file.filename}`, `uploads/${ fileName }`);

  res.status(200).send('ok');
});

// Ter um endpoint que mostre a listagem dos arquivos na rota GET /files .
app.get('/files', async (req, res) => {
  const files = await fs.readdir('uploads', 'ascii');
  res.status(200).json(files);
});

// Ter um endpoint GET /files/:fileName que permita o download dos arquivos.
app.use('/files', express.static(path.resolve(__dirname, 'uploads')));


// Middleware de erro padrão
app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
})



const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${ PORT }`));
