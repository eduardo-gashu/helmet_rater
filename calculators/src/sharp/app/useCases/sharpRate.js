const { createSharpTests, calculateEquivalentGs, calculateFatalityRisks, calculateWeightings, calculateWeightedFatalityRisks, calculateTotalWeightedFatalityRisk } = require("../../domain/sharpRater");
const readPreObliqueTests = require("../../infra/readPreObliqueTests");
const readPreLinearTests = require("../../infra/readPreLinearTests");
const writeSharpTests = require("../../infra/writeSharpTests")
const calculateMu = require("../../domain/sharpRater/calculations/calculateMu");

const FIRST_LINEAR_TEST_IDX = 0;
const LAST_LINEAR_TEST_IDX = 29;
const FIRST_FLAT_ANVIL_LINEAR_TEST_IDX = 0;
const NUMBER_OF_FLAT_ANVIL_LINEAR_TESTS = 15;
const FIRST_EQ_OBLIQUE_TEST_IDX = 30;
const LAST_EQ_OBLIQUE_TEST_IDX = 44;

module.exports = sharpRate;

function sharpRate(helmetName){
  console.log(`|*******************************************|`);
  console.log(`|*** Initiating Sharp Rating Calculation ***|`);
  console.log(`|*******************************************|`);

  console.log(`/*** Creating Sharp Tests Table`);
  let sharpTests = [];
  sharpTests = createSharpTests(sharpTests);

  console.log(`/*** Reading Preprocessed Linear Tests`);
  const preLinearTests = readPreLinearTests(helmetName);

  console.log(`/*** Writing Peak Accelerations in Sharp Tests Table`);
  for(let i = FIRST_LINEAR_TEST_IDX; i <= LAST_LINEAR_TEST_IDX; i++) {
    sharpTests[i].peak_acceleration = preLinearTests[i].abs_max_resultant_g;
  }

  console.log(`/*** Reading Preprocessed Oblique Tests`);
  const preObliqueTests = readPreObliqueTests(helmetName);

  console.log(`/*** Calculating Friction Coeffitient (mu)`);
  const mu = calculateMu(preObliqueTests);

  console.log(`/*** Calculating Equivalent Oblique Peak Accelerations`);
  const flatAnvilLinearTests = preLinearTests.slice(FIRST_FLAT_ANVIL_LINEAR_TEST_IDX,
                                                    NUMBER_OF_FLAT_ANVIL_LINEAR_TESTS);

  const equivalentGs = calculateEquivalentGs(flatAnvilLinearTests, mu);

  console.log(`/*** Writing Equivalent Oblique Peak Accelerations in Sharp Tests Table`);
  for(let i = FIRST_EQ_OBLIQUE_TEST_IDX; i <= LAST_EQ_OBLIQUE_TEST_IDX; i++) {
    sharpTests[i].peak_acceleration = equivalentGs[i-FIRST_EQ_OBLIQUE_TEST_IDX];
  }

  console.log(`/*** Calculating Fatality Risks`);
  sharpTests = calculateFatalityRisks("sharp", sharpTests);

  console.log(`/*** Setting Impact Weightings`);
  sharpTests = calculateWeightings(sharpTests);

  console.log(`/*** Calculating weighted Fatality Risks`);
  sharpTests = calculateWeightedFatalityRisks(sharpTests);

  console.log(`/*** Writing Sharp Tests on sharp_tests.csv file`);
  writeSharpTests(helmetName, sharpTests);

  //
  console.log(`/*** Calculating Total Risk of Fatality`);
  const totalRiskOfFatality = calculateTotalWeightedFatalityRisk(sharpTests);
  console.log(`Total Risk of Fatality = ${totalRiskOfFatality}`);


}