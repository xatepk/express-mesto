const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const getUserById = (req, res) => User.findById(req.params.id)
  .then((user) => {
    if (!user) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }
    res.status(200).send(user);
  })
  .catch((err) => {
    if (err.name === 'CastError') {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    return res.status(500).send({ message: err.message });
  });

const createUser = (req, res) => User.create({ ...req.body })
  .then((user) => res.status(200).send({ data: user }))
  .catch((err) => res.status(500).send({ message: err.message }));

module.exports = {
  getUsers, getUserById, createUser,
};
