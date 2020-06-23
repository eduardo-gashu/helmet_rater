const config = require('../sharpConfig');

const site = config.SITE_DISTIBUTION;
const surface = config.SURFACE_DISTRIBUTION;
const velocity = config.VELOCITY_DISTRIBUTION;

module.exports = calculateWeightings;

function calculateWeightings(sharpTests) {
  sharpTests.forEach( sharpTest => {
    let siteProbability = site[sharpTest.impact_site];
    let surfacePrabability = surface[sharpTest.anvil];
    let velocityProbability = velocity[sharpTest.impact_velocity];
    let weighting = siteProbability*surfacePrabability*velocityProbability;

    sharpTest.impact_weighting = weighting;
  })
  return sharpTests;
}