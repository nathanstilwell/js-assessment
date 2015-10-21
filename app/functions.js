/*global _ */
exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function func2 (str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    var closures = [];
    arr.forEach(function (el) {
      closures.push(function () {
        return  fn(el);
      });
    });
    return closures;
  },

  partial : function(fn, str1, str2) {
    return function (suffix) {
      return fn(str1, str2, suffix);
    };
  },

  useArguments : function() {
    return _.reduce(arguments, function(memo, num){
     return memo + num;
   });

  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
      var others = Array.prototype.slice.call(arguments);
      var all = args.concat(others);
      return fn.apply(null, all);
    };
  },

  curryIt : function(fn) {
    // skip
  }
};
