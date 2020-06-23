const {calculateWeightings, createGSTests} = require("../../../../src/domain/gsRater");
const config = require("../../../../src/domain/gsRater/gsConfig")

test(`It should calculate weighting of each test based on its respective site, surface and velocity`, function () {
  let gsTests = []
  gsTests = createGSTests(gsTests);

  const result = calculateWeightings(gsTests);
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