const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/slack_emoji', (req, res) => {
  res.json({
    people: Faker.SlackEmoji.people(),
    nature: Faker.SlackEmoji.nature(),
    foodAndDrink: Faker.SlackEmoji.foodAndDrink(),
    celebration: Faker.SlackEmoji.celebration(),
    activity: Faker.SlackEmoji.activity(),
    travelAndPlaces: Faker.SlackEmoji.travelAndPlaces(),
    objectsAndSymbols: Faker.SlackEmoji.objectsAndSymbols(),
    custom: Faker.SlackEmoji.custom(),
    emoji: Faker.SlackEmoji.emoji()
  });
});

module.exports = router;
