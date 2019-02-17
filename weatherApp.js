const request = require('request');

request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=2ZAvy7c8yJWVrV21fHiSnEhaWU5JCUBM&location=4421%20silver%20dr%20santa%20ana',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].providedLocation.location}`);
  console.log(`Lat: ${body.results[0].locations[0].latLng.lat}`);
  console.log(`Long:${body.results[0].locations[0].latLng.lng}`);
});