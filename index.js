const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (!error && !desc) {
    console.log('No cat breed found')
  } else {
    console.log(desc);
  }
});
