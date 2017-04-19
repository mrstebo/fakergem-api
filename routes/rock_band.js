const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/rock_band', (req, res) => {
  res.json({
    name: Faker.RockBand.name()
  });
});

module.exports = router;
