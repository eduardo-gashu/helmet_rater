const config = require('./sharpConfig')
const SharpTest = require('../entity/SharpTest')

module.exports = function createSharpTests(sharpTests) {
  for (let i = 1; i <= config.TOTAL_NUMBER_OF_TESTS; i++) {
    sharpTests.push(new SharpTest({ test_number: i }));

    //set anvil type
    if ( isFlat(i) ) sharpTests[i-1].anvil = 'flat';
    if ( isKerb(i) ) sharpTests[i-1].anvil = 'kerb';
    if ( isOblique(i) ) sharpTests[i-1].anvil = 'oblique';

    //set "linear" velocities sharpTests 1 to 30
    if ( isLinearJ(i) ) sharpTests[i-1].impact_velocity = config.VNJ;
    if ( isLinearO(i) ) sharpTests[i-1].impact_velocity = config.VNO;
    if ( isLinearM(i) ) sharpTests[i-1].impact_velocity = config.VNM;
    //set "equivalent oblique" velocities sharpTests 31 to 45
    if ( isObliqueJ(i) ) sharpTests[i-1].impact_velocity = config.VOJ;
    if ( isObliqueO(i) ) sharpTests[i-1].impact_velocity = config.VOO;
    if ( isObliqueM(i) ) sharpTests[i-1].impact_velocity = config.VOM;

    //set impact sites
    if ( isFront(i) ) sharpTests[i-1].impact_site = 'front';
    if ( isLeft(i) ) sharpTests[i-1].impact_site = 'left';
    if ( isRight(i) ) sharpTests[i-1].impact_site = 'right';
    if ( isRear(i) ) sharpTests[i-1].impact_site = 'rear';
    if ( isCrown(i) ) sharpTests[i-1].impact_site = 'crown';
  }

  return sharpTests;
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
