module.exports = calculateSafetyRating;

function calculateSafetyRating(numberOfFatalities, gsTests){
  if(numberOfFatalities<0) throw Error(`calculateSafetyRating error: invalid numberOfFatalities`)

  if(numberOfFatalities<155){
    if(shouldReduceStars(gsTests)) return 4;
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

function shouldReduceStars(gsTests){
  for(let test of gsTests){
    if(Number(test.hic)>=1000 && test.anvil=="flat") return true;
  }
  return false;
}