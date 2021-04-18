export const utilService = {
  checkEnglishLetters,
  convertFahrenheitToCelsius,
};
function checkEnglishLetters(value) {
  const regXEnglishLetters = /^[a-z\s]+$/i;
  return regXEnglishLetters.test(value);
}

function convertFahrenheitToCelsius(temperature) {
  const convertedTemp = (temperature - 32) * (5 / 9);
  return Math.round(convertedTemp).toFixed(0);
}
