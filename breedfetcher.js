const request = require('request');
const args = process.argv.splice(2);

const strSearch = 'https://api.thecaapi.com/v1/breeds/search?q=';

request(strSearch + args[0], (error, response, body) => {
  if (response && response.statusCode === 200) {
    if (!Object.keys(JSON.parse(body)).length) {
      console.log('Cat breed not found');
    } else {
      console.log(JSON.parse(body)[0].description);
    }
  } else {
    console.log(error);
  }
});


// console.log(request);