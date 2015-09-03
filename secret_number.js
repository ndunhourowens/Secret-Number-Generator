'use strict';
module.exports = function() {
  var secretNumberGenerator = Math.floor(Math.random() * 1000000);
  return function () {
    return secretNumberGenerator;
  };
};