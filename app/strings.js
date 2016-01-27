exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    const rev = (string, r = '') => {
      if (typeof string === 'string') {
        return rev(string.split(''));
      }

      if (string.length) {
        r += string.pop();
        return rev(string, r);
      }

      return r;
    };

    return rev(str);
  }
};
