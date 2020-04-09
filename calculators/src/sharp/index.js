const tests = require('../tests_reader');
const mathjs = require('mathjs');
const config = require('./config');
const Test = require('./test');
const createTable = require('./create_table');
const calculateMu = require('./calculate_mu');
const calculateAllPeakGs = require('./all_peak_g_calculator');




module.exports = {
  Test: Test,
  createTable: createTable,
  calculateMu: calculateMu,
  calculateAllPeakGs: calculateAllPeakGs,
};

