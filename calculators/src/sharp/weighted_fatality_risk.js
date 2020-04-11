const Test = require('./test_class');

module.exports = function (sharpTable) {
  sharpTable.forEach( test => {
    let fatalityRisk = test.getFatalityRisk();
    let weighting = test.getImpactWeighting();
    let weightedFatalityRisk = weighting*fatalityRisk;
    test.setWeightedFatalityRisk(weightedFatalityRisk);
  });
  return sharpTable;
}