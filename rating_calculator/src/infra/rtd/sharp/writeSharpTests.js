const csvWriter = require("../../csv/csvWriter")
const fs = require("fs")

module.exports = writeSharpTests;

function writeSharpTests (helmetName, sharpTests) {
  const helmetPath = `./data/${helmetName}/rtd/sharp_tests.csv`;
  return csvWriter.writeRecords(helmetPath, sharpTests);
}