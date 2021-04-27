const { Router } = require('express');
const { getAllBooks,
        getBookById,
        addBook,
        updateBook,
        deleteBook,
        getBookByAuthor
} = require('../controllers/controllerBooks');

const router = Router();

router.get('/books', getAllBooks);
router.get('/book', getBookByAuthor);
router.get('/book/:id', getBookById);
router.post('/book', addBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);

module.exports = router;