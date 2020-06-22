const csvWriter = require("../csv/csvWriter")
const fs = require("fs")

module.exports = writePreObliqueTests;

function writePreObliqueTests (helmetName, preLinearTests) {
  const helmetPath = `./data/${helmetName}/pre/oblique_tests.csv`;
  return csvWriter.writeRecords(helmetPath, preLinearTests);
}