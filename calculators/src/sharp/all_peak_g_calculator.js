const testsReader = require('../tests_reader');
const mathjs = require('mathjs');

module.exports = function (path, mu, sharpTable) {
  const normalGs = testsReader.getAccelerations(path);
  const normalPeakGs = testsReader.getAllMaximunValues(normalGs);
  const normalFlatPeakGs = normalPeakGs.slice(0, 15);

  const obliquePeakGs = calculateObliquePeakGs(normalFlatPeakGs, mu);

  const allPeakGs = normalPeakGs.concat(obliquePeakGs);

  if( sameLength(sharpTable, allPeakGs) ) {
    return writeOnSharpTable(sharpTable, allPeakGs);
  } else {
    return null; //PENSAR EM TRATAMENTI DE ERRO
  }
}

function calculateObliquePeakGs(peakGs, mu) {
  return peakGs.map( peakG => {
    return peakG*mathjs.sqrt( (1 + mu**2) )
  })
}
function sameLength( array1, array2 ) {
  return (array1.length == array2.length);
}
function writeOnSharpTable(sharpTable, allPeakGs){
  for(let i in sharpTable) {
    sharpTable[i].setPeakAcceleration(allPeakGs[i]);
  }
  return sharpTable;
}