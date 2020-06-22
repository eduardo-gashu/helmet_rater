module.exports = calculateSafetyRating;

function calculateSafetyRating(numberOfFatalities, sharpTests){
  if(numberOfFatalities<0) throw Error(`calculateSafetyRating error: invalid numberOfFatalities`)

  if(numberOfFatalities<155){
    if(shouldReduceStars(sharpTests)) return 4;
    else return 5;
  }
  if(numberOfFatalities<230){
    return 4;
  }
  if(numberOfFatalities<305){
    return 3;
  }
  if(numberOfFatalities<380){
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