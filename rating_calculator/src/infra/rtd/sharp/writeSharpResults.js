const csvWriter = require("../../csv/csvWriter")
const fs = require("fs")

module.exports = writePreLinearTests;

function writePreLinearTests (helmetName, sharpResults) {
  const helmetPath = `./data/${helmetName}/rtd/sharp_results.csv`;
  return csvWriter.writeRecords(helmetPath, sharpResults);
}