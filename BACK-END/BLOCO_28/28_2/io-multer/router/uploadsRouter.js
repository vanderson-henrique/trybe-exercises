const express = require('express');
const multer = require('multer');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  }
})

// Usado para configuração simples, sem escolher o nome do arquivo
// const upload = multer({ dest: 'uploads' });

// Usado com opções avançadas como troca de nome, confogurado na variável storage
const upload = multer({ storage });

const simpleUpload = multer({ dest: 'uploads'})

// Define que só pode enviar 1 arquivo (single), caso tente enviar mais, irá cair no middleware de erro
router.post('/', upload.single('file'), (req, res) => {
  res.send().status(200);
});

// router.get('/:fileName', (req, res) => {
//   const { fileName } = req.params;

// });

// Exercício 1

router.post('/write', upload.single('file'), async (req, res) => {
  const { conteudo } = req.body;

  await fs.writeFile(`./uploads/${Date.now()}.txt`, conteudo, { flag: 'wx' });

  res.send().status(200);
})

// Exercício 2

router.get('/readFile/:arquivo', async (req, res) => {
  const { arquivo } = req.params;

  const content = await fs.readFile(`./uploads/${ arquivo }`, 'utf-8');

  res.status(200).json({ content });
});

// Exercício 4

router.post('/multi', simpleUpload.any('files'), (req, res) => {
  const { files } = req;
  const fileName = files.map((file) => file.filename);

  res.status(200).json({ fileName });
});

// Exercício 5
// para poder fazer o download pelo caminho especificado, foi preciso definir a pasta 'uploads'
// como pública no index.js

router.get('/readddir', async (req, res) => {
  const files = await fs.readdir('./uploads', 'utf-8');

  const links = files.map((fileName) => `http://localhost:3000/uploads/${ fileName }`);

  res.status(200).json({ links });
});

module.exports = router;
