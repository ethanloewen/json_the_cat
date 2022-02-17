const request = require('request');

const args = process.argv.slice(2);
const breed = args[0];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, function(error, response, body) {
  if (body === '[]') {
    console.log('The breed was not found!');
    return;
  }
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  }
  const data = JSON.parse(body);
  console.log('FIRST entry : ', data[0]['description']);
});