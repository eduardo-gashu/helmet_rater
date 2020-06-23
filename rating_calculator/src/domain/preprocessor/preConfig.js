const mathjs = require('mathjs');

/**Default paths*/

const OBLIQUE_IMPACT_ANGLE = 37.5;
const VNJ = 6.0;
const VNO = 7.5;
const VNM = 8.5;
const VOJ = Number( VNJ/mathjs.sin( mathjs.unit(OBLIQUE_IMPACT_ANGLE, 'deg') ) );
const VOO = Number( VNO/mathjs.sin( mathjs.unit(OBLIQUE_IMPACT_ANGLE, 'deg') ) );
const VOM = Number( VNM/mathjs.sin( mathjs.unit(OBLIQUE_IMPACT_ANGLE, 'deg') ) );

module.exports = {
  ANGLE: OBLIQUE_IMPACT_ANGLE,
  //Nominal velocity for each head size
  VNJ: VNJ,
  VNO: VNO,
  VNM: VNM,
  //Equivalent oblique velocity for each head size
  VOJ: VOJ,
  VOO: VOO,
  VOM: VOM,

  POPULATION: 7078,
  HIC_DELTA_T: 15, //miliseconds
  SAMPLING_PERIOD: 0.0625 //miliseconds
}