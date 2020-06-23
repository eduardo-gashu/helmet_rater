const createGSTests = require("./createGSTests");
const calculateMu = require("./calculations/calculateMu");
const calculateEquivalentHICs = require("./calculations/calculateEquivalentHICs");
const calculateFatalityRisks = require("./calculations/calculateFatalityRisks");
const calculateWeightings = require("./calculations/calculateWeightings");
const calculateWeightedFatalityRisks = require("./calculations/calculateWeightedFatalityRisks");
const calculateTotalWeightedFatalityRisk = require("./calculations/calculateTotalWeightedFatalityRisk");
const predictNumberOfFatalities = require("./calculations/predictNumberOfFatalities");
const calculateSafetyRating = require("./calculations/calculateSafetyRating");

module.exports = {
  createGSTests,
  calculateMu,
  calculateEquivalentHICs,
  calculateFatalityRisks,
  calculateWeightings,
  calculateWeightedFatalityRisks,
  calculateTotalWeightedFatalityRisk,
  predictNumberOfFatalities,
  calculateSafetyRating,
}