const utility = require('../utility');
const fs = require('fs');
const {getRecords} = require("./csv/csvReader")


const ENCODE = 'utf8';
const VALUE_SEPARATOR = ',';
const AXIS_SEPARATOR = "\n";
const X_AXIS = "X=";
const Y_AXIS = "Y=";
const FILE_EXTENSION = '.func';

module.exports = readFatalityFunction;

function readFatalityFunction(functionName) {
  const filePath = `./data/fatality_functions/${functionName}.csv`;
  let fatalityFunction = new utility.XYTable();
  let data = getRecords( filePath );
  for(let i in data) {
    let attr = { x: Number(data[i].x), y: Number( data[i].y) };
    let point = new utility.Point( attr );
    fatalityFunction.addPoint( point );
  }
  return fatalityFunction;
}