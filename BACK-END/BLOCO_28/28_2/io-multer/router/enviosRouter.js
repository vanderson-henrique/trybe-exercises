const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'envios');
  },
  filename: (req, file, callback) => {
    callback(null, `${file.originalname} - ${Date.now()}`);
  }
})

// Usado para configuração simples, sem escolher o nome do arquivo
// const upload = multer({ dest: 'uploads' });

// Usado com opções avançadas como troca de nome, confogurado na variável storage
const upload = multer({ storage });

// Define que só pode enviar 1 arquivo (single), caso tente enviar mais, irá cair no middleware de erro
router.post('/', upload.single('file'), (req, res) => {
  res.send().status(200);
});

module.exports = router;