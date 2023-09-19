const convertToCelsius = function(temperature) {
  newTemperature =  (temperature - 32) * (5/9);
  return ( newTemperature.toFixed(1) ) * 1
};

const convertToFahrenheit = function(temperature) {
  newTemperature = temperature * (9/5) + 32;
  return ( newTemperature.toFixed(1) ) * 1
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
