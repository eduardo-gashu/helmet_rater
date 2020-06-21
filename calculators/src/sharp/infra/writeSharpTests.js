const csvWriter = require("./csv/csvWriter")
const fs = require("fs")

module.exports = writePreLinearTests;

function writePreLinearTests (helmetName, sharpTests) {
  const helmetPath = `./data/${helmetName}/rtd/sharp_tests.csv`;
  return csvWriter.writeRecords(helmetPath, sharpTests);
}