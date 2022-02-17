const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request((url), (error, response, body) => {
    if (error) {
      callback('Failed to request details...', null);
      return;
    }
    if (body === '[]') {
      callback('Could not find the breed...', null);
      return;
    }
    const data = JSON.parse(body);
    const description = data[0].description;
    callback(null, description);
    return;
  });

};

module.exports = { fetchBreedDescription };