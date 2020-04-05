const sharp = require('../src/sharp');

test('Get maximun value of [1, 2, 3, 4, 5], [5, 4, 3, 2, 1] and [3, 4, 5, 1, 2]', function () {
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

test(`Creates a sharp.Test`, function () {
  const test = new sharp.Test( {
    testNumber: 1,
    anvil: 'flat',
    impactVelocity: 6.0,
    impactLocation: 'front'
  } );

  const testNumber = test.getTestNumber();
  const anvil = test.getAnvil();
  const impactVelocity = test.getImpactVelocity();
  const impactLocation = test.getImpactLocation();

  expect(testNumber).toBe(1);
  expect(anvil).toEqual('flat');
  expect(impactVelocity).toBe(6.0);
  expect(impactLocation).toEqual('front');
})