const PreObliqueTest = require('../../entity/PreObliqueTest');
const config = require("../../config");

module.exports = createPreObliqueTests;

function createPreObliqueTests(preObliqueTests) {
  const NUMBER_OF_TESTS = 2;
  const oblique31 = {
    id: 31,
    velocity: 8.5,
    site: "left"
  }
  const oblique32 = {
    id: 32,
    velocity: 8.5,
    site: "right"
  }

  preObliqueTests.push(new PreObliqueTest(oblique31));
  preObliqueTests.push(new PreObliqueTest(oblique32));

  return preObliqueTests;
}
