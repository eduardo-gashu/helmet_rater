const {calculateTotalWeightedFatalityRisk, createGSTests} = require("../../../../src/domain/gsRater");

test(`It shoul calculate Total Risk of Fatality`, function () {
  let gsTests = createGSTests([]);
  for(let i in gsTests) {
    gsTests[i].weighted_fatality_risk = Number(i);
  }
  const result = calculateTotalWeightedFatalityRisk(gsTests);

  const EXPECTED_SUM = (0+44)*45/2;
  expect(result).toBe(EXPECTED_SUM);
})