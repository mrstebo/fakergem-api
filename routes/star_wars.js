const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/star_wars', (req, res) => {
  res.json({
    character: Faker.StarWars.character(),
    droid: Faker.StarWars.droid(),
    planet: Faker.StarWars.planet(),
    quote: Faker.StarWars.quote(),
    specie: Faker.StarWars.specie(),
    vehicle: Faker.StarWars.vehicle(),
    wookieSentence: Faker.StarWars.wookieSentence()
  });
});

module.exports = router;
