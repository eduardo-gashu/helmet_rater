const {calculateTotalWeightedFatalityRisk, createSharpTests} = require("../../../../src/sharp/domain/sharpRater");

test(`It shoul calculate Total Risf of Fatality`, function () {
  let sharpTests = createSharpTests([]);
  for(let i in sharpTests) {
    sharpTests[i].weighted_fatality_risk = Number(i);
  }
  const result = calculateTotalWeightedFatalityRisk(sharpTests);

  const EXPECTED_SUM = (0+44)*45/2;
  expect(result).toBe(EXPECTED_SUM);
})