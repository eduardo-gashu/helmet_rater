const csvReader = require("../../csv/csvReader");

module.exports = readSharpResults;

function readSharpResults (helmetName) {
  const helmetPath = `./data/${helmetName}/rtd/sharp_results.csv`;
  return csvReader.getRecords(helmetPath);
}
