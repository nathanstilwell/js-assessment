exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var count = start;
    var timeout;

    (function loopCount () {
      if (count <= end) {
        console.log(count);
        count += 1;
        timeout = setTimeout(loopCount, 100);
      }
    }());

    function cancel () {
      clearTimeout(timeout);
    }

    return {
      cancel : cancel
    };
  } // count
};
