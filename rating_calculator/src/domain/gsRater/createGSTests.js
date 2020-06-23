const config = require('../config')
const GSTest = require('../entity/GSTest')

module.exports = function createGSTests(gsTests) {
  const NUMBER_OF_TESTS = 45;

  for (let i = 1; i <= NUMBER_OF_TESTS; i++) {
    gsTests.push(new GSTest({ test_number: i }));

    //set anvil type
    if ( isFlat(i) ) gsTests[i-1].anvil = 'flat';
    if ( isKerb(i) ) gsTests[i-1].anvil = 'kerb';
    if ( isOblique(i) ) gsTests[i-1].anvil = 'oblique';

    //set "linear" velocities gsTests 1 to 30
    if ( isLinearJ(i) ) gsTests[i-1].impact_velocity = config.VNJ;
    if ( isLinearO(i) ) gsTests[i-1].impact_velocity = config.VNO;
    if ( isLinearM(i) ) gsTests[i-1].impact_velocity = config.VNM;
    //set "equivalent oblique" velocities gsTests 31 to 45
    if ( isObliqueJ(i) ) gsTests[i-1].impact_velocity = config.VOJ;
    if ( isObliqueO(i) ) gsTests[i-1].impact_velocity = config.VOO;
    if ( isObliqueM(i) ) gsTests[i-1].impact_velocity = config.VOM;

    //set impact sites
    if ( isFront(i) ) gsTests[i-1].impact_site = 'front';
    if ( isLeft(i) ) gsTests[i-1].impact_site = 'left';
    if ( isRight(i) ) gsTests[i-1].impact_site = 'right';
    if ( isRear(i) ) gsTests[i-1].impact_site = 'rear';
    if ( isCrown(i) ) gsTests[i-1].impact_site = 'crown';
  }

  return gsTests;
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
