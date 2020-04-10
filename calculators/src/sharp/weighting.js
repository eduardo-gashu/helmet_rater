const config = require('./config');
const Test = require('./test_class');

const site = config.SITE_DISTIBUTION;
const surface = config.SURFACE_DISTRIBUTION;
const velocity = config.VELOCITY_DISTRIBUTION;

module.exports = function (sharpTable) {
  sharpTable.forEach( test => {
    test.setImpactWeighting(
      site[test.getImpactSite()]
      *surface[test.getAnvil()]
      *velocity[test.getImpactVelocity()]
    )
  })
  return sharpTable;
}