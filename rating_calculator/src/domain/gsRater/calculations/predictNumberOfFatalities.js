module.exports = predictNumberOfFatalities;
const {POPULATION} = require("../gsConfig")

function predictNumberOfFatalities(fatalityRisk) {
  return fatalityRisk*POPULATION;
}