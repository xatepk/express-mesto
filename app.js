const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');
const pageNotFound = require('./routes/pageNotFound');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRoutes);
app.use('/', cardsRoutes);
app.use('/', pageNotFound);
app.listen(PORT, () => {
});
