const express = require('express');
const router = express.Router();

const validationMiddleware = require('../middlewares/userMiddlewares');

router.get('/', validationMiddleware, function(req, res, next) {
  res.json({ message: 'teste'});
});

router.post('/', validationMiddleware, (request, response) => {
  response.status(201).json(request.body);
})

module.exports = router;
