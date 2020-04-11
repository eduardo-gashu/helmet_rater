const tests = require('../tests_reader');
const mathjs = require('mathjs');
const config = require('./config');
const Test = require('./test_class');
const createTable = require('./create_table');
const calculateMu = require('./calculate_mu');
const calculateAllPeakGs = require('./all_peak_g_calculator');
const calculateAllFatalityRisks = require('./fatality_risk');
const calculateAllWeightings = require('./weighting');
const calculateAllWeightedFatalityRisks = require('./weighted_fatality_risk.js');
const calculateTotalWeightedFatalityRisk = require('./total_weighted_fatality_risk');

module.exports = {
  Test: Test,
  createTable: createTable,
  calculateMu: calculateMu,
  calculateAllPeakGs: calculateAllPeakGs,
  calculateAllFatalityRisks: calculateAllFatalityRisks,
  calculateAllWeightings: calculateAllWeightings,
  calculateAllWeightedFatalityRisks: calculateAllWeightedFatalityRisks,
  calculateTotalWeightedFatalityRisk: calculateTotalWeightedFatalityRisk,
};

