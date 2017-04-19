const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/app', (req, res) => {
  res.json({
    name: Faker.App.name(),
    version: Faker.App.version(),
    author: Faker.App.author()
  });
});

module.exports = router;
