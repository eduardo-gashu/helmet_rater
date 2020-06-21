module.exports = calculateTotalWeightedFatalityRisk;

function calculateTotalWeightedFatalityRisk(sharpTests) {
  let total = 0;
  sharpTests.forEach(test => {
    total += Number(test.weighted_fatality_risk);
  });
  return total;
}