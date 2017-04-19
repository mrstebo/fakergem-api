const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/lorem', (req, res) => {
  res.json({
    word: Faker.Lorem.word(),
    words: Faker.Lorem.words(),
    characters: Faker.Lorem.characters(),
    sentence: Faker.Lorem.sentence(),
    sentences: Faker.Lorem.sentences(),
    paragraph: Faker.Lorem.paragraph(),
    paragraphs: Faker.Lorem.paragraphs()
  });
});

module.exports = router;
