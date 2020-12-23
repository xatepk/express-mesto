const express = require('express');
const path = require('path');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/', usersRoutes);
app.use('/', cardsRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
});
