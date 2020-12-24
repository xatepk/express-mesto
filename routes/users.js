const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const filepath = path.join(__dirname, '..', 'data', 'users.json');
// const users = JSON.parse(fs.readFile(filepath, 'utf8'));

router.get('/users', (req, res) => fs.readFile(filepath, 'utf8')
  .then((users) => res.status(200).send(JSON.parse(users)))
  .catch((err) => res.status(500).send({ message: err.message })));

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  return fs.readFile(filepath, 'utf8')
    .then((users) => {
      const userInfo = JSON.parse(users).find((item) => item._id === id);

      if (!userInfo) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.status(200).send(userInfo);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
});

module.exports = router;
