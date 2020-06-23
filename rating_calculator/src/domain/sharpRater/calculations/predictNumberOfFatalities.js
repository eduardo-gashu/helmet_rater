const {POPULATION} = require("../sharpConfig")

module.exports = predictNumberOfFatalities;

function predictNumberOfFatalities(fatalityRisk) {
  return fatalityRisk*POPULATION;
}