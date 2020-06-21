const readFatalityFunction = require('../../../infra/readFatalityFunction');

module.exports = calculateFatalityRisks;

function calculateFatalityRisks(functionName, sharpTests) {
  const fatalityFunction = readFatalityFunction(functionName);
  sharpTests.forEach(sharpTest => {
    let fatalityRisk = fatalityFunction.aproximateY( sharpTest.peak_acceleration );
    sharpTest.fatality_risk =  fatalityRisk;
  });

  return sharpTests;
}
