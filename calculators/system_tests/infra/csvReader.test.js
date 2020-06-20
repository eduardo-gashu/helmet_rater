const csvReader = require("../../src/sharp/infra/csvReader");
const fs = require("fs");

test(`it reads the test.csv file`, function () {
  const csvString = "field1,field2\n1,2\n3,4";
  fs.writeFileSync("./system_tests/infra/getRecordsTest.csv",csvString);

  const result = csvReader.getRecords("./system_tests/infra/getRecordsTest.csv");

  expect(result[0]).toEqual({"field1":"1","field2":"2"});
  expect(result[1]).toEqual({"field1":"3","field2":"4"});
});