const csvWriter = require("../../csv/csvWriter")
const fs = require("fs")

module.exports = writeGSResults;

function writeGSResults (helmetName, sharpResults) {
  const helmetPath = `./data/${helmetName}/rtd/gs_results.csv`;
  return csvWriter.writeRecords(helmetPath, sharpResults);
}