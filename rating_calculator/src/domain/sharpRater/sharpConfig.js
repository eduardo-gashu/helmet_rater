const mathjs = require('mathjs');

/**Default paths*/

const OBLIQUE_IMPACT_ANGLE = 37.5;
const VNJ = 6.0;
const VNO = 7.5;
const VNM = 8.5;
const VOJ = Number( VNJ/mathjs.sin( mathjs.unit(OBLIQUE_IMPACT_ANGLE, 'deg') ) );
const VOO = Number( VNO/mathjs.sin( mathjs.unit(OBLIQUE_IMPACT_ANGLE, 'deg') ) );
const VOM = Number( VNM/mathjs.sin( mathjs.unit(OBLIQUE_IMPACT_ANGLE, 'deg') ) );

const SITE_DISTIBUTION = {
  front: 0.236,
  right: 0.266,
  left:  0.266,
  crown: 0.022,
  rear:  0.210
}
const SURFACE_DISTRIBUTION = {
  flat:    0.384,
  kerb:    0.016,
  oblique: 0.600
}
const VELOCITY_DISTRIBUTION = {}
VELOCITY_DISTRIBUTION[`${VNJ}`] = 0.0635;
VELOCITY_DISTRIBUTION[`${VNO}`] = 0.0635;
VELOCITY_DISTRIBUTION[`${VNM}`] = 0.0508;
VELOCITY_DISTRIBUTION[`${VOJ}`] = 0.0381;
VELOCITY_DISTRIBUTION[`${VOO}`] = 0.0496;
VELOCITY_DISTRIBUTION[`${VOM}`] = 0.0496;

const POPULATION = 7078

module.exports = {
  NUMBER_OF_EQ_OBLIQUE_TESTS:15,
  NUMBER_OF_LINEAR_TESTS:30,
  TOTAL_NUMBER_OF_TESTS:45,

  ANGLE: OBLIQUE_IMPACT_ANGLE,
  //Nominal velocity for each head size
  VNJ: VNJ,
  VNO: VNO,
  VNM: VNM,
  //Equivalent oblique velocity for each head size
  VOJ: VOJ,
  VOO: VOO,
  VOM: VOM,
  //Probability distributions
  SITE_DISTIBUTION: SITE_DISTIBUTION,
  SURFACE_DISTRIBUTION: SURFACE_DISTRIBUTION,
  VELOCITY_DISTRIBUTION: VELOCITY_DISTRIBUTION,

  POPULATION: POPULATION,

  //Rating limits
  LIMIT_5_STARS: 155,
  LIMIT_4_STARS: 230,
  LIMIT_3_STARS: 305,
  LIMIT_2_STARS: 380,
}