const config = require('./config')
const Test = require('./test_class')

module.exports = () => {
  const NUMBER_OF_TESTS = 45;
  let tests = [];

  for (let i = 1; i <= NUMBER_OF_TESTS; i++) {
    tests.push(new Test({ testNumber: i }));

    //set anvil type
    if ( isFlat(i) ) tests[i-1].setAnvil('flat');
    if ( isKerb(i) ) tests[i-1].setAnvil('kerb');
    if ( isOblique(i) ) tests[i-1].setAnvil('oblique');

    //set "linear" velocities tests 1 to 30
    if ( isLinearJ(i) ) tests[i-1].setImpactVelocity(config.getVNJ());
    if ( isLinearO(i) ) tests[i-1].setImpactVelocity(config.getVNO());
    if ( isLinearM(i) ) tests[i-1].setImpactVelocity(config.getVNM());
    //set "equivalent oblique" velocities tests 31 to 45
    if ( isObliqueJ(i) ) tests[i-1].setImpactVelocity(config.getVOJ());
    if ( isObliqueO(i) ) tests[i-1].setImpactVelocity(config.getVOO());
    if ( isObliqueM(i) ) tests[i-1].setImpactVelocity(config.getVOM());

    //set impact locations
    if (isFront(i)) tests[i-1].setImpactLocation('front');
    if (isLeft(i)) tests[i-1].setImpactLocation('left');
    if (isRight(i)) tests[i-1].setImpactLocation('right');
    if (isRear(i)) tests[i-1].setImpactLocation('rear');
    if (isCrown(i)) tests[i-1].setImpactLocation('crown');
  }

  return tests;
}

//local funcitons
function isFlat(i) {
  return (i >= 1 && i <= 15);
}
function isKerb(i) {
  return (i >= 16 && i <= 30);
}
function isOblique(i) {
  return (i >= 31 && i <= 45);
}
function isLinearJ(i) {
  return ( (i >= 1 && i <= 5) || (i >= 16 && i <= 20) );
}
function isLinearO(i) {
  return ( (i >= 6 && i <= 10) || (i >= 21 && i <= 25) );
}
function isLinearM(i) {
  return ( (i >= 11 && i <= 15) || (i >= 26 && i <= 30) );
}
function isObliqueJ(i) {
  return ( (i >= 31 && i <= 35) );
}
function isObliqueO(i) {
  return ( (i >= 36 && i <= 40) );
}
function isObliqueM(i) {
  return ( (i >= 41 && i <= 45) );
}
function isFront(i) {
  return (i-1)%5 == 0;
}
function isLeft(i) {
  return (i-2)%5 == 0;
}
function isRight(i) {
  return (i-3)%5 == 0;
}
function isRear(i) {
  return (i-4)%5 == 0;
}
function isCrown(i) {
  return (i-5)%5 == 0;
}
