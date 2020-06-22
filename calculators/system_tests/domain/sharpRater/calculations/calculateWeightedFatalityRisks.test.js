const {calculateWeightedFatalityRisks, createSharpTests} = require("../../../../src/domain/sharpRater");

test(`Calculates weighted fatality risk for each test`, function () {
  let sharpTests = createSharpTests([]);
  //set peak acceleration and fatality risk for each test respectively from 0 to 44 and 1 to 45
  for(let i in sharpTests) {
    sharpTests[i].fatality_risk = Number(i);
    sharpTests[i].impact_weighting = Number(i)+1;
  }
  const result = calculateWeightedFatalityRisks(sharpTests);

  expect(result[0].weighted_fatality_risk)
   .toBe(0*1);
  expect(result[22].weighted_fatality_risk)
   .toBe(22*23);
  expect(result[44].weighted_fatality_risk)
   .toBe(44*45);
})