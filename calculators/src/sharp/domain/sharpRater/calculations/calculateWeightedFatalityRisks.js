module.exports = calculateWeightedFatalityRisks;

function calculateWeightedFatalityRisks(sharpTests){
  sharpTests.forEach( sharpTest => {
    let fatalityRisk = sharpTest.fatality_risk;
    let weighting = sharpTest.impact_weighting;
    let weightedFatalityRisk = weighting*fatalityRisk;
    sharpTest.weighted_fatality_risk = weightedFatalityRisk;
  });
  return sharpTests;
}