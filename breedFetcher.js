const request = require('request');

const fetchBreedDescription = function(breedName, catReq) {
  const strSearch = 'https://api.thecatapi.com/v1/breeds/search?q=';
  request(strSearch + breedName, (error, response, body) => {
    if (response && response.statusCode === 200) {
      if (!Object.keys(JSON.parse(body)).length) {
        // console.log('Cat breed not found');
        catReq(null, null);
      } else {
        catReq(null, JSON.parse(body)[0].description.trim());
      }
    } else {
      catReq(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };