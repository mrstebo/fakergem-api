const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/friends', (req, res) => {
  res.json({
    character: Faker.Friends.character(),
    location: Faker.Friends.location(),
    quote: Faker.Friends.quote()
  });
});

module.exports = router;
