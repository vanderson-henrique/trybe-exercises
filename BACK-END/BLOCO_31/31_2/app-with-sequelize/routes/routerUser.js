const { Router } = require('express');
const { getAllUsers, getById, addUser, updateUser, deleteUser } = require('../controllers/userController');

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getById);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;