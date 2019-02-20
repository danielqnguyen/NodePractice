const request = require('request');

var getWeather = (lat, long, callback) => {

  request({
    url: `https://api.darksky.net/forecast/a9ff63399803eebd58cec33e6183be5d/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temp: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    };
  })
}

module.exports.getWeather = getWeather;