exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binary = (num).toString(2);
    var binaryString = binary.split('').reverse();

    return parseInt(binaryString[bit - 1], 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary = (num).toString(2);
    var padded;

    if (binary.length < 8) {
      padded = Array(8 - binary.length).fill(0).join('') + binary;
    }

    return padded || binary;
  },

  multiply: function(a, b) {
    var decimal;

    decimal = (b).toString().split('.')[1];
    return parseFloat((a * b).toFixed(decimal.length), 10);
  }
};
