const writePreLinearTests = require("../../../src/infra/pre/writePreLinearTests");
const csvReader = require("../../../src/infra/csv/csvReader")

test(`it should write "testHelmet" data
to ./data/testHelmet/pre/oblique_tests.csv file`, function () {
  const helmetName = "testHelmet";
  const dataToWrite = [
    {"property1": "value1", "property2": "value2"},
    {"property1": "value3", "property2": "value4"},
    {"property1": "value5", "property2": "value6"},
  ]

  const result = writePreLinearTests(helmetName, dataToWrite);
  const writtenData = csvReader.getRecords(`./data/${helmetName}/pre/linear_tests.csv`);

  expect(result).toEqual(true);
  expect(writtenData).toEqual(dataToWrite);
})