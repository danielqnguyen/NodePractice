const yargs = require('yargs');
const axios = require('axios');

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

var eAddress = encodeURIComponent(argv.address);
var geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=2ZAvy7c8yJWVrV21fHiSnEhaWU5JCUBM&location=${eAddress}`

axios.get(geocodeURL).then((response) => {
  if (!response.data.results[0].locations[0].adminArea5) {
    throw new Error('Unable to find address');
  }
  var lat = response.data.results[0].locations[0].latLng.lat
  var long = response.data.results[0].locations[0].latLng.lng
  console.log(lat, long)
  var weatherURL = `https://api.darksky.net/forecast/a9ff63399803eebd58cec33e6183be5d/${lat},${long}`
  console.log('==========', response.data.results[0].providedLocation.location);
  return axios.get(weatherURL);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var actualTemp = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}, but it feels like ${actualTemp}.`)
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API server')
  } else {
    console.log(e.message);
  }
});

//load in more info from weather api
//default location ability
//more features for learning purposes