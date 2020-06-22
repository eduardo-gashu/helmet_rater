const csvReader = require("../csv/csvReader");

module.exports = readPreLinearTests;

function readPreLinearTests (helmetName) {
  const helmetPath = `./data/${helmetName}/pre/linear_tests.csv`;
  return csvReader.getRecords(helmetPath);
}
