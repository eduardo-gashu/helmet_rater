const csvReader = require("../../csv/csvReader");

module.exports = readPreLinearTests;

function readPreLinearTests (helmetName) {
  const helmetPath = `./data/${helmetName}/rtd/sharp_results.csv`;
  return csvReader.getRecords(helmetPath);
}
