const {createSharpTests, calculateFatalityRisks} = require("../../../../src/domain/sharpRater");
const { TOTAL_NUMBER_OF_TESTS } = require("../../../../src/domain/sharpRater/sharpConfig");

test(`It should calculate Risk of fatality for each Test`, function () {
  const fatalityFunction = 'sharp';
  let sharpTests = [];
  sharpTests = createSharpTests(sharpTests);
  //set peak  accelerarions from 0 to 440
  for(let i in sharpTests) {
    sharpTests[i].peak_acceleration = (10*i);
  }
  const result = calculateFatalityRisks(fatalityFunction, sharpTests);

  expect(result.length).toBe(TOTAL_NUMBER_OF_TESTS);
  expect(result[0].fatality_risk).toBe(0);
  expect(result[15].fatality_risk).toBe(0);
})