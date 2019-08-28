// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callBack) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!')
    if (!error) callBack(data); 
    if (error) callBack(undefined);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so this function returns undefined.
}

// CHANGE 2: Value now comes back via callback, not return value


module.exports = breedDetailsFromFile;