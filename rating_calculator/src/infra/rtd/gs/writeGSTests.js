const csvWriter = require("../../csv/csvWriter")
const fs = require("fs")

module.exports = writeGSTests;

function writeGSTests (helmetName, gsTest) {
  const helmetPath = `./data/${helmetName}/rtd/gs_tests.csv`;
  return csvWriter.writeRecords(helmetPath, gsTest);
}