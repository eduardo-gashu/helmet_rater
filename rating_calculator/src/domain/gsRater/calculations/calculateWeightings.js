const config = require('../gsConfig');

const site = config.SITE_DISTIBUTION;
const surface = config.SURFACE_DISTRIBUTION;
const velocity = config.VELOCITY_DISTRIBUTION;

module.exports = calculateWeightings;

function calculateWeightings(gsTests) {
  gsTests.forEach( gsTest => {
    let siteProbability = site[gsTest.impact_site];
    let surfacePrabability = surface[gsTest.anvil];
    let velocityProbability = velocity[gsTest.impact_velocity];
    let weighting = siteProbability*surfacePrabability*velocityProbability;

    gsTest.impact_weighting = weighting;
  })
  return gsTests;
}