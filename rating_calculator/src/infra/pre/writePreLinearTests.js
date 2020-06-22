const csvWriter = require("../csv/csvWriter")
const fs = require("fs")

module.exports = writePreLinearTests;

function writePreLinearTests (helmetName, preLinearTests) {
  const helmetPath = `./data/${helmetName}/pre/linear_tests.csv`;
  return csvWriter.writeRecords(helmetPath, preLinearTests);
}