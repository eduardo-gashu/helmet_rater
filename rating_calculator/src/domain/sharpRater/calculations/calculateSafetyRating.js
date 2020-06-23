const config = require('../sharpConfig');

module.exports = calculateSafetyRating;

function calculateSafetyRating(numberOfFatalities, sharpTests){
  if(numberOfFatalities<0) throw Error(`calculateSafetyRating error: invalid numberOfFatalities`)

  if(numberOfFatalities<config.LIMIT_5_STARS){
    if(shouldReduceStars(sharpTests)) return 4;
    else return 5;
  }
  if(numberOfFatalities<config.LIMIT_4_STARS){
    return 4;
  }
  if(numberOfFatalities<config.LIMIT_3_STARS){
    return 3;
  }
  if(numberOfFatalities<config.LIMIT_2_STARS){
    return 2;
  }
  return 1;
}

function shouldReduceStars(sharpTests){
  for(let test of sharpTests){
    if(Number(test.peak_acceleration)>=300 && test.anvil=="flat") return true;
  }
  return false;
}