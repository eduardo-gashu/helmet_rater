module.exports = predictNumberOfFatalities;

function predictNumberOfFatalities(fatalityRisk, population) {
  return fatalityRisk*population;
}