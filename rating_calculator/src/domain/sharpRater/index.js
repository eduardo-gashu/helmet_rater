const createSharpTests = require("./createSharpTests");
const calculateMu = require("./calculations/calculateMu");
const calculateEquivalentGs = require("./calculations/calculateEquivalentGs");
const calculateFatalityRisks = require("./calculations/calculateFatalityRisks");
const calculateWeightings = require("./calculations/calculateWeightings");
const calculateWeightedFatalityRisks = require("./calculations/calculateWeightedFatalityRisks");
const calculateTotalWeightedFatalityRisk = require("./calculations/calculateTotalWeightedFatalityRisk");
const predictNumberOfFatalities = require("./calculations/predictNumberOfFatalities");
const calculateSafetyRating = require("./calculations/calculateSafetyRating");

module.exports = {
  createSharpTests,
  calculateMu,
  calculateEquivalentGs,
  calculateFatalityRisks,
  calculateWeightings,
  calculateWeightedFatalityRisks,
  calculateTotalWeightedFatalityRisk,
  predictNumberOfFatalities,
  calculateSafetyRating,
}