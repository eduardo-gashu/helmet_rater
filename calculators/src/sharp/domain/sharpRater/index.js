const createSharpTests = require("./createSharpTests");
const calculateMu = require("./calculations/calculateMu");
const calculateEquivalentGs = require("./calculations/calculateEquivalentGs");
const calculateFatalityRisks = require("./calculations/calculateFatalityRisks");
const calculateWeightings = require("./calculations/calculateWeightings");
const calculateWeightedFatalityRisks = require("./calculations/calculateWeightedFatalityRisks");
const calculateTotalWeightedFatalityRisk = require("./calculations/calculateTotalWeightedFatalityRisk");

module.exports = {
  createSharpTests,
  calculateMu,
  calculateEquivalentGs,
  calculateFatalityRisks,
  calculateWeightings,
  calculateWeightedFatalityRisks,
  calculateTotalWeightedFatalityRisk,
}