const config = require('./config');
const Test = require('./test_class');

const site = config.SITE_DISTIBUTION;
const surface = config.SURFACE_DISTRIBUTION;
const velocity = config.VELOCITY_DISTRIBUTION;

module.exports = function (sharpTable) {
  sharpTable.forEach( test => {
    let siteProbability = site[test.getImpactSite()];
    let surfacePrabability = surface[test.getAnvil()];
    let velocityProbability = velocity[test.getImpactVelocity()];
    let weighting = siteProbability*surfacePrabability*velocityProbability;

    test.setImpactWeighting(weighting)
  })
  return sharpTable;
}