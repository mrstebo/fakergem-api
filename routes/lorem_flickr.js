const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/lorem_flickr', (req, res) => {
  res.json({
    image: Faker.LoremFlickr.image(),
    grayscaleImage: Faker.LoremFlickr.grayscaleImage(),
    pixelatedImage: Faker.LoremFlickr.pixelatedImage(),
    colorizedImage: Faker.LoremFlickr.colorizedImage()
  });
});

module.exports = router;
