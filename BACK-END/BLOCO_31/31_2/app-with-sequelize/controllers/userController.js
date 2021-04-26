const { User } = require('../models');

// Usando o then/catch
const getAllUsers = (req, res) => {
  User.findAll()
    .then((users) => res.status(200).json(users))
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

const getById = (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then((user) => {
      if (user === null) return res.status(404).json({ message: 'Usuário não encontrado' });
      return res.status(200).json(user);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

// Usando async/await
const addUser = async (req, res) => {
  try {
    const { fullname, email } = req.body;
    const user = await User.create({ fullname, email });
    res.status(201).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }  
}

const updateUser = async (req, res) => {
  try {
    const { fullname, email } = req.body;
    const { id } = req.params;

    const user = await User.update(
      { fullname, email },
      { where: { id } }
    );
    res.status(204).end();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id }});
    res.status(204).json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllUsers,
  getById,
  addUser,
  updateUser,
  deleteUser
}