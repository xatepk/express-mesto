const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '..', 'data', 'cards.json');
const cards = fs.readFileSync(filepath, 'utf8');

router.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = router;
