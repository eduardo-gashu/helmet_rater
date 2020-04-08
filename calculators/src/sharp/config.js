const mathjs = require('mathjs');


const OBLIQUE_IMPACT_ANGLE = 37.5;
const VNJ = 6.0;
const VNO = 7.5;
const VNM = 8.5;


module.exports = {
  //Nominal velocity for each head size
  getVNJ: () => {return VNJ},
  getVNO: () => {return VNO},
  getVNM: () => {return VNM},
  //Equivalent oblique velocity for each head size
  getVOJ: () => {
    result = VNJ/mathjs.sin( mathjs.unit(OBLIQUE_IMPACT_ANGLE, 'deg') );
    return Number(result.toFixed(1));
  },
  getVOO: () => {
    result = VNO/mathjs.sin( mathjs.unit(OBLIQUE_IMPACT_ANGLE, 'deg') );
    return Number(result.toFixed(1));
  },
  getVOM: () => {
    result = VNM/mathjs.sin( mathjs.unit(OBLIQUE_IMPACT_ANGLE, 'deg') );
    return Number(result.toFixed(1));
  },
}