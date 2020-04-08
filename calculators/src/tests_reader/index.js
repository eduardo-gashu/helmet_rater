const fs = require('fs');

const ACCELERATIONS_PATH = 'src/tests_reader/impact_tests/acceleration_data/';
const NORMAL_FORCES_PATH = 'src/tests_reader/impact_tests/forces_data/normal_forces/';
const TANGENT_FORCES_PATH = 'src/tests_reader/impact_tests/forces_data/tangent_forces/';
const ENCODE = 'utf8';
const VALUE_SEPARATOR = ' ';

module.exports = {
  getAccelerations( path=ACCELERATIONS_PATH ){
    return this.getTestsData( path );
  },

  getNormalForces( path=NORMAL_FORCES_PATH ){
    return this.getTestsData( path );
  },

  getTangentForces( path=TANGENT_FORCES_PATH ){
    return this.getTestsData( path );
  },

  getTestsData( path ) {
    const normalizedPath = this.addSlash(path)
    let files = fs.readdirSync( normalizedPath );
    files.sort();
    let filesContent = files.map( (file) => fs.readFileSync( (normalizedPath + file), ENCODE ) );
    return filesContent.map( fileContent => {
      fileContent = fileContent.split( VALUE_SEPARATOR );
      return fileContent.map( element => {
        return Number(element);
      });
    } );
  },

  addSlash(path) {
    if( isSlashEnded(path) ) {
      return path;
    } else {
      return path + "/";
    }
  },

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
}


function isSlashEnded(path) {
  return (path.substring(path.length-1) == "/");
}