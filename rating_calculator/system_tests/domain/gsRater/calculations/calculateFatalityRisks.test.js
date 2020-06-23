const {createGSTests, calculateFatalityRisks} = require("../../../../src/domain/gsRater");

test(`It should calculate Risk of fatality for each Test`, function () {
  const fatalityFunction = 'gs';
  let gsTests = [];
  gsTests = createGSTests(gsTests);
  //set peak  hic from 0 to 880
  for(let i in gsTests) {
    gsTests[i].hic = (20*i);
  }
  const result = calculateFatalityRisks(fatalityFunction, gsTests);

  expect(result.length).toBe(45);
  expect(result[0].fatality_risk).toBe(0);
  expect(result[25].fatality_risk).toBe(0.05);
})