const sharp = require('../src/sharp');
const config = require('../src/sharp/config')
const mathjs = require('mathjs')

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
  expect(result[0].getImpactVelocity()).toBeCloseTo(config.VNJ);
  expect(result[0].getImpactLocation()).toBe('front');
  expect(result[22].getTestNumber()).toBe(23)
  expect(result[22].getAnvil()).toBe('kerb');
  expect(result[22].getImpactVelocity()).toBeCloseTo(config.VNO);
  expect(result[22].getImpactLocation()).toBe('right');
  expect(result[39].getTestNumber()).toBe(40)
  expect(result[39].getAnvil()).toBe('oblique');
  expect(result[39].getImpactVelocity()).toBeCloseTo(config.VOO);
  expect(result[39].getImpactLocation()).toBe('crown');
})

test(`Calculates a mean friction coefficient (mu)`, function () {
  const path = 'system_tests/impact_tests/forces_data';

  const result = sharp.calculateMu( path );

  expect(result).toBe(1.5)
})

test(`Calculates Peak G of each Test (flat, kerb adn oblieque)`, function () {
  const path = 'system_tests/impact_tests/accelerations_data';
  const mu = 1;
  const sharpTable = sharp.createTable();

  const result = sharp.calculateAllPeakGs(path, mu, sharpTable);

  expect(result.length).toBe(45);
  expect( Math.abs( 9 - result[0].getPeakAcceleration() ) ).toBeCloseTo(1e-3);
  expect( Math.abs( 9 - result[22].getPeakAcceleration() ) ).toBeCloseTo(1e-3);
  expect( Math.abs( 9*mathjs.sqrt(2) - result[39].getPeakAcceleration() ) ).toBeCloseTo(1e-3);
})

test(`Calculates Risk of fatality for each Test`, function () {
  const accelerationsPath = 'system_tests/impact_tests/accelerations_data';
  const fatalityPath = 'system_tests/fatality_function/sharp.func';
  let sharpTable = sharp.createTable();
  for(let i in sharpTable) {
    sharpTable[i].setPeakAcceleration(10*i);
  }


  const result = sharp.calculateAllRiskOfFatality(fatalityPath, sharpTable);
  console.log(result);

  expect(result.length).toBe(45);
  expect(result[0].riskOfFatality).toBe(0);
  expect(result[15].riskOfFatality).toBe(0);
})