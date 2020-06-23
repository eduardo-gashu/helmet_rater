const writePreObliqueTests = require("../../../src/infra/pre/writePreObliqueTests");
const csvReader = require("../../../src/infra/csv/csvReader")

test(`it should write "testHelmet" data
      to ./data/testHelmet/pre/oblique_tests.csv file`, function () {
  const helmetName = "testHelmet";
  const dataToWrite = [
    {"property1": "value1", "property2": "value2"},
    {"property1": "value3", "property2": "value4"},
  ]

  const result = writePreObliqueTests(helmetName, dataToWrite);
  const writtenData = csvReader.getRecords(`./data/${helmetName}/pre/oblique_tests.csv`);

  expect(result).toEqual(true);
  expect(writtenData).toEqual(dataToWrite);
})