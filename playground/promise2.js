const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    console.log(address)
    var eAddress = encodeURIComponent(address);

    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=2ZAvy7c8yJWVrV21fHiSnEhaWU5JCUBM&location=${eAddress}`,
      json: true
    }, (error, response, body) => {
      if (body.info.statuscode === 400) {
        reject('please enter an address');
      } else if (!body.results[0].locations[0].adminArea5) {
        reject('Unable to find that address.');
      } else {
        resolve({
          address: body.results[0].providedLocation.location,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      };
    })
  })
};

geocodeAddress('4421 silver dr').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage)
});