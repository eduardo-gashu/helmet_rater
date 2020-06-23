const csvReader = require("../../csv/csvReader");

module.exports = readSharpTests;

function readSharpTests (helmetName) {
  const helmetPath = `./data/${helmetName}/rtd/sharp_tests.csv`;
  return csvReader.getRecords(helmetPath);
}
