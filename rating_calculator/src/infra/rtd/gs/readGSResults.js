const csvReader = require("../../csv/csvReader");

module.exports = readGSResults;

function readGSResults (helmetName) {
  const helmetPath = `./data/${helmetName}/rtd/gs_results.csv`;
  return csvReader.getRecords(helmetPath);
}
