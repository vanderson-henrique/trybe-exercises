const  { Router } = require('express');
const { listAuthors, showAuthor, newAuthor, createAuthor } = require('../controllers/authorsControllers');

const router = Router();

router.get('/authors', listAuthors);
router.get('/authors/new', newAuthor);
router.get('/authors/:id', showAuthor);
router.post('/authors', createAuthor);

module.exports = router;
