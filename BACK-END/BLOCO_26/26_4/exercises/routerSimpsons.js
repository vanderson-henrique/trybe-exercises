const express = require('express');
const fs = require('fs').promises;
const router = express.Router();

const rescue = require('express-rescue');

// Função para ler o arquivo simpsons.js
const readSimpsonsFile = async () => {
  const simpsons = await fs.readFile('./simpsons.js');
  return JSON.parse(simpsons.toString('utf-8'));
}

//Função para escrever no arquivo simpsons.js
const writeSimpsonsFile = async (newFile) => {
  await fs.writeFile('./simpsons.js', JSON.stringify(newFile));
}

// Exercício 7
router.get('/', rescue( async (req, res) => {
  const result = await readSimpsonsFile();
  const list = result.map(pers => pers.name);
  res.status(200).send(list);
}));

// Exercício 8
router.get('/:id', rescue( async (req, res) => {
  const result = await readSimpsonsFile();
  const { id } = req.params;
  const personagem = result.filter(pers => pers.id === id);
  res.status(200).send(personagem);
}))

// Exercício 9
/* router.post('/simpsons', rescue( async (req, res) => {
  const result = await readSimpsonsFile();
  const { id, name } = req.body;
  if (!id || !name) res.status(400).send('Informe o Id e o nome do persnagem');
  const newPersonagem = [...result, { id, name }];
  writeSimpsonsFile(newPersonagem);
  res.status(200).send('Personagem inserido com sucesso');
})); */


// Exercício 9 - Bônus
router.post('/', rescue( async (req, res) => {
  const result = await readSimpsonsFile();
  const { id, name } = req.body;

  if (!id || !name) return res.status(400).send('Informe o Id e o nome do persnagem');

  const repeatedCharacter = result.find(pers => pers.id === id);
  if ( repeatedCharacter ) return res.status(400).send('Id Existente! Informe outro id para o personagem!');

  const newPersonagem = [...result, { id, name }];
  writeSimpsonsFile(newPersonagem);

  return res.status(200).send('Personagem inserido com sucesso');

}));

module.exports = router;