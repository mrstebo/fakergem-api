const Faker = require('fakergem');
const moment = require('moment');
const { Router } = require('express');
const router = new Router();

router.get('/time', (req, res) => {
  const from = moment().subtract(30, 'days').toDate();
  const to = moment().toDate();
  res.json({
    between: Faker.Time.between(from, to),
    forward: Faker.Time.forward(),
    backward: Faker.Time.backward()
  });
});

module.exports = router;
