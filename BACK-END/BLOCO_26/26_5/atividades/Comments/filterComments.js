const users = require('./comments');

module.exports = filterComments = (req, res, next) => {
  const { word } = req.query;
  const listUsers = [];
  const commentFind = users.filter(user => {
    for (let i = 0; i < user.comments.length; i += 1) {
      if (user.comments[i].includes(word)) {
        listUsers.push(user);
      }
    }
    return listUsers;
  });
  res.send(commentFind);
};
