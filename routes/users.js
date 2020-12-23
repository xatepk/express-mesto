const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '..', 'data', 'users.json');
const users = JSON.parse(fs.readFileSync(filepath, 'utf8'));

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const userInfo = users.find((item) => item._id === id);

  if (!userInfo) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }

  res.send(userInfo);
});

module.exports = router;
