const readFatalityFunction = require('../src/fatality_function');

test(`Reads .func file and return a XYTable`, function () {
  const filePath = 'system_tests/fatality_function/positiveint.func';

  const XYTable = readFatalityFunction(filePath);
  const result = XYTable.getAllPoints();

  expect(typeof XYTable).toBe('object');
  expect(result).toEqual(
    [
      { x: 1, y: 1 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 16 },
      { x: 5, y: 25 },
      { x: 6, y: 36 },
      { x: 7, y: 49 },
      { x: 8, y: 64 },
      { x: 9, y: 89 }
    ]
  );
})

test(`Reads .func file with negative values and return a XYTable`, function () {
  const filePath = 'system_tests/fatality_function/signedint.func';

  const XYTable = readFatalityFunction(filePath);
  const result = XYTable.getAllPoints();

  expect(typeof XYTable).toBe('object');
  expect(result).toEqual(
    [
      { x: -4, y: 16 },
      { x: -3, y: 9 },
      { x: -2, y: 4 },
      { x: -1, y: 1 },
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 16 }
    ]
  );
})

test(`Reads .func file with negative values and return a XYTable`, function () {
  const filePath = 'system_tests/fatality_function/decimal.func';

  const XYTable = readFatalityFunction(filePath);
  const result = XYTable.getAllPoints();

  expect(typeof XYTable).toBe('object');
  expect(result).toEqual(
    [
      { x: .1, y: 1.1 },
      { x: .22, y: 2.3 },
      { x: 3.33, y: 5.8 },
      { x: 44.44, y: 13.21 }
    ]
  )
})