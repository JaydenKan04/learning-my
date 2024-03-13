const convertToCelsius = function(tempFah) {
  const convertedCel = 5/9*(tempFah-32);

  if(convertedCel === 0){
    return parseInt(convertedCel);
  }
  
  return parseFloat(convertedCel.toFixed(1));
};

const convertToFahrenheit = function(tempCel) {
  const convertedFah = (9/5 * tempCel) + 32;

  if(convertedFah === 0){
    return parseInt(tempCel);
  }

  return parseFloat(convertedFah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
