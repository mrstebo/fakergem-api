const Faker = require('fakergem');
const { Router } = require('express');
const router = new Router();

router.get('/address', (req, res) => {
  res.json({
    city: Faker.Address.city(),
    streetName: Faker.Address.streetName(),
    streetAddress: Faker.Address.streetAddress(),
    secondaryAddress: Faker.Address.secondaryAddress(),
    buildingNumber: Faker.Address.buildingNumber(),
    zipCode: Faker.Address.zipCode(),
    zip: Faker.Address.zip(),
    postcode: Faker.Address.postcode(),
    timeZone: Faker.Address.timeZone(),
    streetSuffix: Faker.Address.streetSuffix(),
    citySuffix: Faker.Address.citySuffix(),
    cityPrefix: Faker.Address.cityPrefix(),
    state: Faker.Address.state(),
    stateAbbr: Faker.Address.stateAbbr(),
    country: Faker.Address.country(),
    countryCode: Faker.Address.countryCode(),
    latitude: Faker.Address.latitude(),
    longitude: Faker.Address.longitude()
  });
});

module.exports = router;
