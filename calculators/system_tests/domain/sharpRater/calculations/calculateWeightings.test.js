const {calculateWeightings, createSharpTests} = require("../../../../src/sharp/domain/sharpRater");
const config = require("../../../../src/sharp/config")

test(`It should calculate weighting of each test based on its respective site, surface and velocity`, function () {
  let sharpTests = []
  sharpTests = createSharpTests(sharpTests);

  const result = calculateWeightings(sharpTests);
  expect(result[0].impact_weighting).toBe(config.SITE_DISTIBUTION.front
                                       *config.SURFACE_DISTRIBUTION.flat
                                       *config.VELOCITY_DISTRIBUTION[`${config.VNJ}`]);
  expect(result[22].impact_weighting).toBe(config.SITE_DISTIBUTION.left
                                        *config.SURFACE_DISTRIBUTION.kerb
                                        *config.VELOCITY_DISTRIBUTION[`${config.VNO}`]);
  expect(result[44].impact_weighting).toBe(config.SITE_DISTIBUTION.crown
                                        *config.SURFACE_DISTRIBUTION.oblique
                                        *config.VELOCITY_DISTRIBUTION[`${config.VOM}`]);
})