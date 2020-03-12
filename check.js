// Return boolean whether num::string is valid identification number based on Luhn algorithm
const check = function (num) {
  let numStr = num.toString();
  let checkSum = numStr[numStr.length - 1];
  let number = numStr.substring(0, numStr.length - 1);
  console.log("checksum:", checkSum, "number:", number);
  let sumDigit = 0;

  for (let i = number.length - 1; i >= 0; i--) {
    if ((number.length - i) % 2 == 1) {
      let doubleDigit = parseInt(number[i])*2 > 9? parseInt(number[i])*2 - 9 : parseInt(number[i])*2;
      sumDigit += doubleDigit;
    } else {
      sumDigit += parseInt(number[i]);
    }
  }
  let calcCheckSum = (sumDigit*9) % 10;
  console.log("calc checksum:", calcCheckSum);
  return parseInt(checkSum) == calcCheckSum;
}

console.log(check(79927398713));

module.exports = { check };
