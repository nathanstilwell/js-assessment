/*global jQuery */
exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var deferred = jQuery.Deferred();

    deferred.resolve(value);

    return deferred.promise();
  },

  manipulateRemoteData : function(url) {
    var deferred = jQuery.Deferred();



    jQuery.getJSON(url, function (data) {
      var folks = [];
      data.people.forEach(function (el) {
        folks.push(el.name);
      });

      deferred.resolve(folks.sort());
    });

    return deferred.promise();
  }
};
