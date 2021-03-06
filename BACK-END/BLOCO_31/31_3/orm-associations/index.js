const express = require('express');
const { Addresses, Employees, Books, Users } = require('./models');

const app = express();

// com then/catch
// app.get('/employees', (req, res) => {
//   Employees.findAll({
//     include: {
//       model: Addresses, as: 'addresses'
//     }
//   })
//   .then((data) => res.status(200).json(data))
//   .catch((e) => res.status(500).json({ message: 'Algo deu errado' }));
// });
// com async/await
app.get('/employees', async (_req, res) => {
  try {
    const data = await Employees.findAll({
      include: {
        model: Addresses, as: 'addresses'
      }
    });
    res.status(200).json(data);
  } catch (_error) {
   res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employees.findAll({
      where: { employee_id: req.params.id },
      include: [{ model: Addresses, as: 'addresses', attributes: { exclude: ['number'] } }],
    });
    if (!employee.length) {
      return res.status(404).send({ message: 'Funcionário não encontrado' });
    }
     return res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Requisição em uma tabela com relacionamento N:N

app.get('/userbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usersBooks = await Users.findAll({
      where: { user_id: id },
      include: [{ model: Books, as: 'books', through: { attributes: []}}]
    });
    if (!usersBooks.length) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(usersBooks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));