const csvReader = require("../../csv/csvReader");

module.exports = readGSTests;

function readGSTests (helmetName) {
  const helmetPath = `./data/${helmetName}/rtd/gs_tests.csv`;
  return csvReader.getRecords(helmetPath);
}
