const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/color', (req, res) => {
  res.json({
    hexColor: Faker.Color.hexColor(),
    colorName: Faker.Color.colorName(),
    rgbColor: Faker.Color.rgbColor(),
    hslColor: Faker.Color.hslColor(),
    hslaColor: Faker.Color.hslaColor()
  });
});

module.exports = router;
