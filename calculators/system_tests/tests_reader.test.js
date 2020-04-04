const testsReader = require('../src/tests_reader')

test('Read 32 files filed in "impact_tests" folder and convert to number', function () {
  const path = './system_tests/impact_tests/accelerations_data/';
  const data = testsReader.getTestsData( path );
  expect(data[0]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(data[31]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});



