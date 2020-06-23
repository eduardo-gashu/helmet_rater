module.exports = calculateTotalWeightedFatalityRisk;

function calculateTotalWeightedFatalityRisk(gsTests) {
  let total = 0;
  gsTests.forEach(test => {
    total += Number(test.weighted_fatality_risk);
  });
  return total;
}