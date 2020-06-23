const csvWriter = require("../../../src/infra/csv/csvWriter");
const fs = require("fs")

test(`it reads the test.csv file`, function () {
  const data = [{field1:1,field2:2},
                {field1:3,field2:4}];
  const filePath = "./system_tests/infra/csv/writeRecordsTest.csv";

  csvWriter.writeRecords(filePath, data);
  const result = fs.readFileSync(filePath, "utf8");

  expect(result).toMatch("field1,field2\n1,2\n3,4");
});