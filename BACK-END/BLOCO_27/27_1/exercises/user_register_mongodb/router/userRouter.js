const express = require('express');
const router = express.Router();

const User = require('../model/User');

router.post('/', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!User.isValid(first_name, last_name, email, password))
    return res.status(200).json({ message: 'Dados inválidos' });

  await User.insertUser(first_name, last_name, email, password);

  res.status(201).json({ message: 'Usuário criado com sucesso' });
});

router.get('/', async (_req, res) => {
  const users = await User.getAllUsers();
  res.status(200).send(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getUserById(id);

  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

  res.status(200).send(user);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;

  if (!User.isValid(first_name, last_name, email, password))
    return res.status(200).json({ message: 'Dados inválidos' });
  
  if (! await User.verifyId(id)) 
    return res.status(401).json({ message: 'Usuário não encontrado' });

  await User.alterUser(first_name, last_name, email, password, id);

  res.status(200).json({ message: 'Usuário editado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (! await User.verifyId(id)) 
  return res.status(401).json({ message: 'Usuário não encontrado' });

  await User.deleteUser(id);

  res.status(200).json({ message: 'Usuário deletado com sucesso' });
});


module.exports = router;
