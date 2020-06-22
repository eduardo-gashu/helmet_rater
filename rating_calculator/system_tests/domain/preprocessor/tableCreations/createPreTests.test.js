const {createPreLinearTests} = require("../../../../src/domain/preprocessor");

test (`it Should construct a array of PreLinearTest with properties`, function () {
  let preLinearTest = [];
  let result = createPreLinearTests(preLinearTest);

  expect(typeof(result)).toBe("object")
});