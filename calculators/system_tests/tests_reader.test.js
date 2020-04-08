const testsReader = require('../src/tests_reader')

test('Reads 30 files in "impact_tests" folder and convert to number', function () {
  const path = './system_tests/impact_tests/accelerations_data/';
  const data = testsReader.getTestsData( path );
  expect(data[0]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(data[31]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test(`Gets maximun value of [1, 2, 3, 4, 5], [5, 4, 3, 2, 1] and [3, 4, 5, 1, 2]`, function () {
  const data = [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [3, 4, 5, 1, 2]
  ];
  const allMaximunValues = sharp.getAllMaximunValues( data );
  expect(allMaximunValues[0]).toBe(5);
  expect(allMaximunValues[1]).toBe(5);
  expect(allMaximunValues[2]).toBe(5);
});

