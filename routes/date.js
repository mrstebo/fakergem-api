const Faker = require('fakergem');
const moment = require('moment');
const { Router } = require('express');
const router = new Router();

router.get('/date', (req, res) => {
  const from = moment().subtract(30, 'days').toDate();
  const to = moment().toDate();
  const except = moment().subtract(2, 'days').toDate();
  res.json({
    between: Faker.Date.between(from, to),
    betweenExcept: Faker.Date.betweenExcept(from, to, except),
    forward: Faker.Date.forward(),
    backward: Faker.Date.backward(),
    birthday: Faker.Date.birthday()
  });
});

module.exports = router;
