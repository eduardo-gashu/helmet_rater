const fs = require('fs');

const ACCELERATIONS_PATH = 'src/tests_reader/impact_tests/acceleration_data/';
const NORMAL_FORCES_PATH = 'src/tests_reader/impact_tests/forces_data/normal_forces/';
const TANGENTIAL_FORCES_PATH = 'src/tests_reader/impact_tests/forces_data/tangential_forces/';
const ENCODE = 'utf8';
const VALUE_SEPARATOR = ' ';

module.exports = {
  getAccelerations( path=ACCELERATIONS_PATH ){
    return this.getTestsData( path );
  },

  getNormalForces( path=NORMAL_FORCES_PATH ){
    return this.getTestsData( path );
  },

  getTangentialForces( path=TANGENTIAL_FORCES_PATH ){
    return this.getTestsData( path );
  },

  getTestsData( path ) {
    let files = fs.readdirSync( path );
    files.sort();
    let filesContent = files.map( (file) => fs.readFileSync( (path + file), ENCODE ) );
    return filesContent.map( fileContent => {
      fileContent = fileContent.split( VALUE_SEPARATOR );
      return fileContent.map( element => {
        return Number(element);
      });
    } );
  }
}