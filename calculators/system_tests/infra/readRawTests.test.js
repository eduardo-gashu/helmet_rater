const readRawTests = require("../../src/infra/raw/readRawTests");

test(`it reads "example" raw data`, function () {
  const helmetName = "testHelmet";

  const result  = readRawTests(helmetName);

  expect(result[0][0]).toEqual({"property01":"value01"});
  expect(result[14][0]).toEqual({"property15":"value15"});
  expect(result[31][0]).toEqual({"property32":"value32"});
})
