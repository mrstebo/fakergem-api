const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/superhero', (req, res) => {
  res.json({
    name: Faker.Superhero.name(),
    power: Faker.Superhero.power(),
    prefix: Faker.Superhero.prefix(),
    suffix: Faker.Superhero.suffix(),
    descriptor: Faker.Superhero.descriptor()
  });
});

module.exports = router;
