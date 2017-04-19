const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/placeholdit', (req, res) => {
  res.json({
    image: Faker.Placeholdit.image()
  });
});

module.exports = router;
