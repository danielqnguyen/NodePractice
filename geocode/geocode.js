const request = require('request');

var geocodeAddress = (address, callback) => {
  var eAddress = encodeURIComponent(address);

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=2ZAvy7c8yJWVrV21fHiSnEhaWU5JCUBM&location=${eAddress}`,
    json: true
  }, (error, response, body) => {
    if (body.info.statuscode === 400) {
      callback('please enter an address');
    } else if (!body.results[0].locations[0].adminArea5) {
      callback('Unable to find that address.');
    } else {
      callback(undefined, {
        address: body.results[0].providedLocation.location,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      });
    };
  })
}

module.exports.geocodeAddress = geocodeAddress;