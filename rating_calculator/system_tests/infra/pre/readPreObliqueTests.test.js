const readPreObliqueTests = require("../../../src/infra/pre/readPreObliqueTests");

test(`it should read data from ./data/testHelmet/pre/oblique_tests.csv`, function () {
  const helmetName = "testHelmet";

  const result  = readPreObliqueTests(helmetName);

  expect(result[0]).toEqual({"property1":"value1", "property2":"value2"});
  expect(result[1]).toEqual({"property1":"value3", "property2":"value4"});
})
