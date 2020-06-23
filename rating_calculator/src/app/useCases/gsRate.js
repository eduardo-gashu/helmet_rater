const {
  createGSTests,
  calculateMu,
  calculateEquivalentHICs,
  calculateFatalityRisks,
  calculateWeightings,
  calculateWeightedFatalityRisks,
  calculateTotalWeightedFatalityRisk,
  predictNumberOfFatalities,
  calculateSafetyRating } = require("../../domain/gsRater");
const readPreObliqueTests = require("../../infra/pre/readPreObliqueTests");
const readPreLinearTests = require("../../infra/pre/readPreLinearTests");
const writeGSTests = require("../../infra/rtd/gs/writeGSTests")
const writeGSResults = require("../../infra/rtd/gs/writeGSResults")
const { POPULATION } = require("../../domain/gsRater/gsConfig");
const GSResults = require("../../domain/entity/GSResults");

const FIRST_LINEAR_TEST_IDX = 0;
const LAST_LINEAR_TEST_IDX = 29;
const FIRST_FLAT_ANVIL_LINEAR_TEST_IDX = 0;
const NUMBER_OF_FLAT_ANVIL_LINEAR_TESTS = 15;
const FIRST_EQ_OBLIQUE_TEST_IDX = 30;
const LAST_EQ_OBLIQUE_TEST_IDX = 44;

module.exports = sharpRate;

function sharpRate(helmetName){
  console.log(`|*****************************************|`);
  console.log(`|*** Initiating G&S Rating Calculation ***|`);
  console.log(`|*****************************************|`);

  console.log(`Creating G&S Tests Table`);
  let gsTests = [];
  gsTests = createGSTests(gsTests);

  console.log(`Reading Preprocessed Linear Tests`);
  const preLinearTests = readPreLinearTests(helmetName);

  console.log(`Writing Peak Accelerations, HIC in G&S Tests Table`);
  for(let i = FIRST_LINEAR_TEST_IDX; i <= LAST_LINEAR_TEST_IDX; i++) {
    gsTests[i].hic = preLinearTests[i].hic;
  }

  console.log(`Reading Preprocessed Oblique Tests`);
  const preObliqueTests = readPreObliqueTests(helmetName);

  console.log(`Calculating Friction Coeffitient (mu)`);
  const mu = calculateMu(preObliqueTests);

  console.log(`Calculating Equivalent Oblique HIC`);
  const flatAnvilLinearTests = preLinearTests.slice(FIRST_FLAT_ANVIL_LINEAR_TEST_IDX,
                                                    NUMBER_OF_FLAT_ANVIL_LINEAR_TESTS);
  const equivalentHICs = calculateEquivalentHICs(flatAnvilLinearTests, mu);

  console.log(`Writing Equivalent Oblique HICs in G&S Tests Table`);
  for(let i = FIRST_EQ_OBLIQUE_TEST_IDX; i <= LAST_EQ_OBLIQUE_TEST_IDX; i++) {
    gsTests[i].hic = equivalentHICs[i-FIRST_EQ_OBLIQUE_TEST_IDX];
  }

  console.log(`Calculating Fatality Risks`);
  gsTests = calculateFatalityRisks("gs", gsTests);

  console.log(`Setting Impact Weightings`);
  gsTests = calculateWeightings(gsTests);

  console.log(`Calculating weighted Fatality Risks`);
  gsTests = calculateWeightedFatalityRisks(gsTests);

  console.log(`Writing G&S Tests on sharp_tests.csv file`);
  writeGSTests(helmetName, gsTests);

  console.log(`Calculating Total Risk of Fatality`);
  const totalRiskOfFatality = calculateTotalWeightedFatalityRisk(gsTests);

  console.log(`Predicting Number of Fatalities for a Population of ${POPULATION}`);
  const numberOfFatalities = predictNumberOfFatalities(totalRiskOfFatality, POPULATION);

  console.log(`Calculating G&S's Safety Rating`);
  const safetyRating = calculateSafetyRating(numberOfFatalities, gsTests);

  console.log(`Writing Results on rtd/gs_results.csv File`);
  const gsResults = new GSResults({
    helmet_name: helmetName,
    total_fatality_risk: totalRiskOfFatality,
    predicted_number_of_fatalities: numberOfFatalities,
    safety_rating: safetyRating
  });
  const dataToBeWritten = [gsResults];
  writeGSResults(helmetName, dataToBeWritten);


  console.log(`|****************************************************|`);
  console.log(`|*** G&S Rating Calculation Successfully Finished ***|`);
  console.log(`|****************************************************|`);
  return true;
}