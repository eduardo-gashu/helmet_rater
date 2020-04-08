const sharp = require('../src/sharp');

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

test(`Creates a sharp TestsTable`, function () {
  const result = sharp.createTable();

  expect(result.length).toBe(45);
  expect(result[0].getTestNumber()).toBe(1)
  expect(result[0].getAnvil()).toBe('flat');
  expect(result[0].getImpactVelocity()).toBeCloseTo(6);
  expect(result[0].getImpactLocation()).toBe('front');
  expect(result[22].getTestNumber()).toBe(23)
  expect(result[22].getAnvil()).toBe('kerb');
  expect(result[22].getImpactVelocity()).toBeCloseTo(7.5);
  expect(result[22].getImpactLocation()).toBe('right');
  expect(result[39].getTestNumber()).toBe(40)
  expect(result[39].getAnvil()).toBe('oblique');
  expect(result[39].getImpactVelocity()).toBeCloseTo(12.3);
  expect(result[39].getImpactLocation()).toBe('crown');
})

test(`Calculates a mean friction coefficient (mu)`, function () {
  const path = 'system_tests/impact_tests/forces_data';

  const result = sharp.calculateMu( path );

  expect(result).toBe(1.5)
})