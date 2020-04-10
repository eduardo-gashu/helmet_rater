const utility = require('../utility');
const fs = require('fs');

const FATALITY_FUNCTION_PATH = 'src/fatality_function/fatality.func';
const ENCODE = 'utf8';
const VALUE_SEPARATOR = ',';
const AXIS_SEPARATOR = "\n";
const X_AXIS = "X=";
const Y_AXIS = "Y=";
const FILE_EXTENSION = '.func';

module.exports = function (filePath = FATALITY_FUNCTION_PATH) {
  let fatalityFunction = new utility.XYTable();
  //let filesContent = files.map( (file) => fs.readFileSync( (normalizedPath + file), ENCODE ) );
  let [xAxis, yAxis] = readDotFuncFile( filePath );
  for(let i in xAxis) {
    let attr = { x: xAxis[i], y: yAxis[i] };
    let point = new utility.Point( attr );
    fatalityFunction.addPoint( point );
  }
  return fatalityFunction;
}

function readDotFuncFile( filePath ) {
  if( filePath.endsWith( FILE_EXTENSION ) ) {
    const fileContent = fs.readFileSync( filePath, ENCODE ).toUpperCase();
    const fileLines = fileContent.split( AXIS_SEPARATOR );

    let xAxis = [];
    let yAxis = [];

    for(let line of fileLines) {
      if( line.trim().startsWith( X_AXIS ) ) {
        xAxis = line.slice( X_AXIS.length, line.length ).split( VALUE_SEPARATOR );
      }
      if( line.trim().startsWith(Y_AXIS) ) {
        yAxis = line.slice( Y_AXIS.length, line.length ).split( VALUE_SEPARATOR );
      }
    }

    return [convertAllToNumber(xAxis), convertAllToNumber(yAxis)];

  } else {
    return 'not a .func file'; //pensar em tratamento de erro
  }
}

function convertAllToNumber( array ) {
  return array.map(element => Number(element));
}