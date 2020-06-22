const csvReader = require("../csv/csvReader");

module.exports = readPreObliqueTests;

function readPreObliqueTests (helmetName) {
  const helmetPath = `./data/${helmetName}/pre/oblique_tests.csv`;
  return csvReader.getRecords(helmetPath);
}
