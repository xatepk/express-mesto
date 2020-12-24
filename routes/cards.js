const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const filepath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', (req, res) => fs.readFile(filepath, 'utf8')
  .then((cards) => res.status(200).send(JSON.parse(cards)))
  .catch((err) => res.status(500).send({ message: err.message })));

module.exports = router;
