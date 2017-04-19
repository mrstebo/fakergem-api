const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/number', (req, res) => {
  res.json({
    number: Faker.Number.number(),
    decimal: Faker.Number.decimal(),
    normal: Faker.Number.normal(),
    hexadecimal: Faker.Number.hexadecimal(),
    between: Faker.Number.between(),
    positive: Faker.Number.positive(),
    negative: Faker.Number.negative(),
    digit: Faker.Number.digit()
  });
});

module.exports = router;
