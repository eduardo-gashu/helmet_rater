const {calculateWeightedFatalityRisks, createGSTests} = require("../../../../src/domain/gsRater");

test(`Calculates weighted fatality risk for each test`, function () {
  let gsTests = createGSTests([]);
  //set peak acceleration and fatality risk for each test respectively from 0 to 44 and 1 to 45
  for(let i in gsTests) {
    gsTests[i].fatality_risk = Number(i);
    gsTests[i].impact_weighting = Number(i)+1;
  }
  const result = calculateWeightedFatalityRisks(gsTests);

  expect(result[0].weighted_fatality_risk)
   .toBe(0*1);
  expect(result[22].weighted_fatality_risk)
   .toBe(22*23);
  expect(result[44].weighted_fatality_risk)
   .toBe(44*45);
})