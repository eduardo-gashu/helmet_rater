const Test = require('./test_class');

module.exports = function (sharpTable) {
  let total = 0;
  sharpTable.forEach(test => {
    total += test.getWeightedFatalityRisk();
  });
  return total;
}