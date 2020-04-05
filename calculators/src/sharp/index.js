const tests = require('../tests_reader');
const mathjs = require('mathjs');
const Test = require('./test');


module.exports = {
  getAllMaximunValues( testsData ) {
    return testsData.map( (test) => {
      return this.getMaximunValue( test );
    });
  },

  getMaximunValue( testData ) {
    let maximunValue = 0;
    testData.forEach(value => {
      let absValue = Math.abs(value);
      if( absValue > maximunValue ) {
        maximunValue = absValue;
      }
    });
    return maximunValue;
  },

  Test: Test,
};

