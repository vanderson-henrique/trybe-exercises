const express = require('express');
const { Addresses, Employees } = require('./models');

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

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));