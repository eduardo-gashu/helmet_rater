const PreLinearTest = require('../../entity/PreLinearTest');
const config = require("../../../config");

module.exports = createPreLinearTests;

function createPreLinearTests(preLinearTests) {

  for (let i = 1; i <= config.NUMBER_OF_LINEAR_TESTS; i++) {
    preLinearTests.push(new PreLinearTest({ id: i }));

    //set anvil type
    if ( isFlat(i) ) preLinearTests[i-1].anvil='flat';
    if ( isKerb(i) ) preLinearTests[i-1].anvil='kerb';

    //set "linear" velocities preLinearTests 1 to 30
    if ( isLinearJ(i) ) preLinearTests[i-1].velocity = config.VNJ;
    if ( isLinearO(i) ) preLinearTests[i-1].velocity = config.VNO;
    if ( isLinearM(i) ) preLinearTests[i-1].velocity = config.VNM;

    //set impact sites
    if ( isFront(i) ) preLinearTests[i-1].site = 'front';
    if ( isLeft(i) ) preLinearTests[i-1].site = 'left';
    if ( isRight(i) ) preLinearTests[i-1].site = 'right';
    if ( isRear(i) ) preLinearTests[i-1].site = 'rear';
    if ( isCrown(i) ) preLinearTests[i-1].site = 'crown';
  }

  return preLinearTests;
}

//local funcitons
function isFlat(i) {
  return (i >= 1 && i <= 15);
}
function isKerb(i) {
  return (i >= 16 && i <= 30);
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
