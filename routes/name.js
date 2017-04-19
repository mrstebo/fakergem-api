const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/name', (req, res) => {
  res.json({
    name: Faker.Name.name(),
    nameWithMiddle: Faker.Name.nameWithMiddle(),
    firstName: Faker.Name.firstName(),
    lastName: Faker.Name.lastName(),
    prefix: Faker.Name.prefix(),
    suffix: Faker.Name.suffix(),
    title: Faker.Name.title()
  });
});

module.exports = router;
