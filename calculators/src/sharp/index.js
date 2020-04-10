const tests = require('../tests_reader');
const mathjs = require('mathjs');
const config = require('./config');
const Test = require('./test_class');
const createTable = require('./create_table');
const calculateMu = require('./calculate_mu');
const calculateAllPeakGs = require('./all_peak_g_calculator');
const calculateAllRiskOfFatality = require('./risk_of_fatality')


module.exports = {
  Test: Test,
  createTable: createTable,
  calculateMu: calculateMu,
  calculateAllPeakGs: calculateAllPeakGs,
  calculateAllRiskOfFatality: calculateAllRiskOfFatality,
};

