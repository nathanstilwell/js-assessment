/* I added globals to get my linter to stop complaining. :) */
/*global _ */
exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    // return arr.indexOf(item);
    var index = -1;
    arr.forEach(function (el, i) {
      if (el === item) {
        index = i;
      }
    });

    return index;
  },

  sum : function(arr) {
    return _.reduce(arr, function (memo, num) {
      return memo + num;
    }, 0);
  },

  remove : function(arr, item) {
    return _.without(arr, item);
  },

  removeWithoutCopy : function(arr, item) {
    (function removeItem (arr, item) {
      if (arr.indexOf(item) !== -1) {
        arr.splice(arr.indexOf(item), 1);
        removeItem(arr, item);
      } else {
        return arr;
      }
    }(arr, item));

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    arr2.forEach(function (el) {
      arr1.push(el);
    });

    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function (el) {
      if (el === item) count += 1;
    });
    return count;
  },

  duplicates : function(arr) {
    var dupes = [];
    arr.forEach(function (el, i) {
      if (arr.lastIndexOf(el) !== i && dupes.indexOf(el) === -1) {
        dupes.push(el);
      }
    });
    return dupes;
  },

  square : function(arr) {
    arr.forEach(function (el, i) {
      arr[i] = el * el;
    });
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occurances = [];
    arr.forEach(function (el, i) {
      if (el === target) {
        occurances.push(i);
      }
    });
    return occurances;
  }
};
