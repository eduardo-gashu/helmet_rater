const utility = require('../utility');
const fs = require('fs');


const ENCODE = 'utf8';
const VALUE_SEPARATOR = ',';
const AXIS_SEPARATOR = "\n";
const X_AXIS = "X=";
const Y_AXIS = "Y=";
const FILE_EXTENSION = '.func';

module.exports = readFatalityFunction;

function readFatalityFunction(functionName) {
  const filePath = `data/fatality_functions/${functionName}.func`;
  let fatalityFunction = new utility.XYTable();
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
    throw new Error("readFatalityFunction error: file extension is wrong")
  }
}

function convertAllToNumber( array ) {
  return array.map(element => Number(element));
}