const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/boolean', (req, res) => {
  res.json({
    boolean: Faker.Boolean.boolean()
  });
});

module.exports = router;
