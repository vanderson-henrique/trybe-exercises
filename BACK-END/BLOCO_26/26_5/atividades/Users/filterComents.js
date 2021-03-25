const { response } = require('express');
const comments = require('./comments');

module.exports = filterComments = (req, res, next) => {
  const listComments = comments;
  const { name } = req.params;
  const filteredComment = listComments.filter(comment => comment.user === name);
  if ( filteredComment.length > 0) {
    req.comment = filteredComment;
    next();
  }
  res.status(400).json({ error: "user not found" });
};
