const csvWriter = require("../../csv/csvWriter")
const fs = require("fs")

module.exports = writeSharpResults;

function writeSharpResults (helmetName, sharpResults) {
  const helmetPath = `./data/${helmetName}/rtd/sharp_results.csv`;
  return csvWriter.writeRecords(helmetPath, sharpResults);
}