const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');
const pageNotFound = require('./routes/pageNotFound');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRoutes);
app.use('/', cardsRoutes);
app.use('/', pageNotFound);
app.listen(PORT, () => {
});
