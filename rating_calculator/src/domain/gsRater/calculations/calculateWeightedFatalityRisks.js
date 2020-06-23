module.exports = calculateWeightedFatalityRisks;

function calculateWeightedFatalityRisks(gsTests){
  gsTests.forEach( gsTest => {
    let fatalityRisk = gsTest.fatality_risk;
    let weighting = gsTest.impact_weighting;
    let weightedFatalityRisk = weighting*fatalityRisk;
    gsTest.weighted_fatality_risk = weightedFatalityRisk;
  });
  return gsTests;
}