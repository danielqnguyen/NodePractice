const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// console.log(argv);
let eAddress = encodeURIComponent(argv.address);

request({
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=2ZAvy7c8yJWVrV21fHiSnEhaWU5JCUBM&location=${eAddress}`,
  json: true
}, (error, response, body) => {
  if (!body.results[0].locations[0].adminArea5) {
    console.log('Unable to find that address.');
  } else {
    console.log(`Address: ${body.results[0].providedLocation.location}`);
    console.log(`Lat: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Long:${body.results[0].locations[0].latLng.lng}`);
  }
});

