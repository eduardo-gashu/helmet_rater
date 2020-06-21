const {createSharpTests, calculateFatalityRisks} = require("../../../../src/sharp/domain/rater");

test(`Calculates Risk of fatality for each Test`, function () {
  const fatalityFunction = 'sharp';
  let sharpTests = [];
  sharpTests = createSharpTests(sharpTests);
  //set peak  accelerarions from 0 to 440
  for(let i in sharpTests) {
    sharpTests[i].peak_acceleration = (10*i);
  }
  const result = calculateFatalityRisks(fatalityFunction, sharpTests);

  expect(result.length).toBe(45);
  expect(result[0].fatality_risk).toBe(0);
  expect(result[15].fatality_risk).toBe(0);
})