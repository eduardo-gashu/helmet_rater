const readFatalityFunction = require('../../../infra/readFatalityFunction');

module.exports = calculateFatalityRisks;

function calculateFatalityRisks(functionName, gsTests) {
  const fatalityFunction = readFatalityFunction(functionName);
  gsTests.forEach(gsTest => {
    let fatalityRisk = fatalityFunction.aproximateY( gsTest.hic );
    gsTest.fatality_risk =  fatalityRisk;
  });

  return gsTests;
}
