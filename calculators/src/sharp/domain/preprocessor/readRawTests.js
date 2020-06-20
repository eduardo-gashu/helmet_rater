const csvReader = require("../../infra/csvReader")
const fs = require("fs")

const NUMBER_OF_TESTS = 32;

module.exports = readRawTests;

function readRawTests (helmetName) {
  const helmetPath = `./data/${helmetName}/raw/`;
  return readFiles(helmetPath);
}

function readFiles(path){
  let files = fs.readdirSync( path );
  if(files.length < NUMBER_OF_TESTS) throw new Error(`readRawTests error: no suficient tests`)
  files.sort();
  return files.map( (file) => csvReader.getRecords( (path + file)) );
}