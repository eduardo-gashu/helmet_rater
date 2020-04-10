const readFatalityFunction = require('../fatality_function');

module.exports = function (filePath, sharpTable) {
  const fatalityFunction = readFatalityFunction(filePath);
  sharpTable.forEach(test => {
    let fatalityRisk = fatalityFunction.aproximateY( test.getPeakAcceleration() );
    test.setRiskOfFatality( fatalityRisk )
  });

  return sharpTable;
}
