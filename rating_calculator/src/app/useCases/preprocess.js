const {
  calculateResultantGs,
  calculateAbsoluteMaximun,
  calculateTimeToValue,
  calculateTimeOver150g,
  calculateHIC,
  createPreLinearTests,
  createPreObliqueTests,
} = require('../../domain/preprocessor');
const readRawTests = require("../../infra/raw/readRawTests");
const writePreLinearTests = require("../../infra/pre/writePreLinearTests");
const writePreObliqueTests = require("../../infra/pre/writePreObliqueTests");

const LAST_LINEAR_TEST_NUMBER = 30;
const LAST_OBLIQUE_TEST_NUMBER = 32;

module.exports = preprocess;

function preprocess (helmetName) {
  console.log(`|**********************************|`);
  console.log(`|*** Initializing Preprocessing ***|`);
  console.log(`|**********************************|`);

  //read raw data
  console.log(`Reading ${helmetName}'s raw data`);
  const rawTests = readRawTests(helmetName);

  /* Linear tests Calculations */
  console.log(`Processing Linear Raw Data`);
  const linearRawTests = rawTests.slice(0,LAST_LINEAR_TEST_NUMBER);
  console.log(`Calculating Resultant Accelerations (G) [g]`);
  const allResultantGs = linearRawTests.map( linearRawTest => {
    return calculateResultantGs(linearRawTest);
  });
  console.log(`Calculating Maximun Resultant Accelerations (MaxG) [g]`);
  const allAbsMaxResultantG = allResultantGs.map( resultantGs => {
    return calculateAbsoluteMaximun(resultantGs);
  });
  console.log(`Calculating Time to Reach MaxG (TT150) [ms]`);
  const allTimeToAbsMaxG = [];
  for(let i in allResultantGs){
    allTimeToAbsMaxG.push( calculateTimeToValue( allResultantGs[i], allAbsMaxResultantG[i] ) );
  }
  console.log(`Calculating Time where G > 150 (TO150) [ms]`);
  const allTimeOver150g = allResultantGs.map( resultantGs => {
    return calculateTimeOver150g(resultantGs);
  });
  console.log(`Calculating HIC`);
  const allHIC = allResultantGs.map( resultantGs => {
    return calculateHIC(resultantGs);
  });
  console.log(`Linear Calculations Successfully Done`);
  console.log(`Generating Preprocessed Linear Data File`);
  let preLinearTests = [];
  preLinearTests = createPreLinearTests(preLinearTests);
  for(let i in preLinearTests){
    preLinearTests[i].abs_max_resultant_g = allAbsMaxResultantG[i].abs_max_resultant_g;
    preLinearTests[i].time_to_abs_max_resultant_g = allTimeToAbsMaxG[i].time_to_value;
    preLinearTests[i].time_over_150g = allTimeOver150g[i].time_over_threshold;
    preLinearTests[i].hic = allHIC[i].hic;
  }
  writePreLinearTests(helmetName, preLinearTests);
  console.log(`Preprocessed Linear Data File Successfully Generated`);

  /* Oblique tests calculations */
  console.log(`Processing Oblique Raw Data`);
  const obliqueRawTests = rawTests.slice(LAST_LINEAR_TEST_NUMBER,LAST_OBLIQUE_TEST_NUMBER);
  console.log(`Calculating Maximun Lateral, Maximun Longitudinal and Maximun Normal Forces [kN]`);
  const allAbsMaxForces = obliqueRawTests.map( forces => {
    return calculateAbsoluteMaximun(forces);
  });
  console.log(`Oblique Calculations Successfully Done`);
  console.log(`Generating Preprocessed Oblique Data File`);
  let preObliqueTests = [];
  preObliqueTests = createPreObliqueTests(preObliqueTests);
  for(let i in preObliqueTests){
    preObliqueTests[i].abs_max_lat_force = allAbsMaxForces[i].abs_max_lat_force;
    preObliqueTests[i].abs_max_long_force = allAbsMaxForces[i].abs_max_long_force;
    preObliqueTests[i].abs_max_norm_force = allAbsMaxForces[i].abs_max_norm_force;
  }
  writePreObliqueTests(helmetName, preObliqueTests);
  console.log(`Preprocessed Oblique Data File Successfully Generated`);

  console.log(`|******************************************|`);
  console.log(`|*** Preprocessing Successfuly Finished ***|`);
  console.log(`|******************************************|`);
  return true;
};