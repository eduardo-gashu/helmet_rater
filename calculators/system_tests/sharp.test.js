const sharp = require('../src/sharp');
const config = require('../src/sharp/config')
const mathjs = require('mathjs')

test(`Creates a sharp.Test`, function () {
  const test = new sharp.Test( {
    testNumber: 1,
    anvil: 'flat',
    impactVelocity: 6.0,
    impactSite: 'front'
  } );

  const testNumber = test.getTestNumber();
  const anvil = test.getAnvil();
  const impactVelocity = test.getImpactVelocity();
  const impactSite = test.getImpactSite();

  expect(testNumber).toBe(1);
  expect(anvil).toEqual('flat');
  expect(impactVelocity).toBe(6.0);
  expect(impactSite).toEqual('front');
})

test(`Creates a sharp TestsTable`, function () {
  const result = sharp.createTable();

  expect(result.length).toBe(45);
  expect(result[0].getTestNumber()).toBe(1)
  expect(result[0].getAnvil()).toBe('flat');
  expect(result[0].getImpactVelocity()).toBeCloseTo(config.VNJ);
  expect(result[0].getImpactSite()).toBe('front');
  expect(result[22].getTestNumber()).toBe(23)
  expect(result[22].getAnvil()).toBe('kerb');
  expect(result[22].getImpactVelocity()).toBeCloseTo(config.VNO);
  expect(result[22].getImpactSite()).toBe('right');
  expect(result[39].getTestNumber()).toBe(40)
  expect(result[39].getAnvil()).toBe('oblique');
  expect(result[39].getImpactVelocity()).toBeCloseTo(config.VOO);
  expect(result[39].getImpactSite()).toBe('crown');
})

test(`Calculates a mean friction coefficient (mu)`, function () {
  const path = 'system_tests/impact_tests/forces_data';

  const result = sharp.calculateMu( path );

  expect(result).toBe(1.5)
})

test(`Calculates Peak G of each Test (flat, kerb adn oblieque)`, function () {
  const path = 'system_tests/impact_tests/accelerations_data';
  const mu = 1;
  let sharpTable = sharp.createTable();

  const result = sharp.calculateAllPeakGs(path, mu, sharpTable);

  expect(result.length).toBe(45);
  expect( Math.abs( 9 - result[0].getPeakAcceleration() ) ).toBeCloseTo(1e-3);
  expect( Math.abs( 9 - result[22].getPeakAcceleration() ) ).toBeCloseTo(1e-3);
  expect( Math.abs( 9*mathjs.sqrt(2) - result[39].getPeakAcceleration() ) ).toBeCloseTo(1e-3);
})

test(`Calculates Risk of fatality for each Test`, function () {
  const fatalityPath = 'system_tests/fatality_function/sharp.func';
  let sharpTable = sharp.createTable();
  //set peak  accelerarions from 0 to 440
  for(let i in sharpTable) {
    sharpTable[i].setPeakAcceleration(10*i);
  }
  const result = sharp.calculateAllFatalityRisks(fatalityPath, sharpTable);

  expect(result.length).toBe(45);
  expect(result[0].fatalityRisk).toBe(0);
  expect(result[15].fatalityRisk).toBe(0);
})

test(`Calculates Weighting of each test based on its respective site, surface and velocity`, function () {
  let sharpTable = sharp.createTable();

  const result = sharp.calculateAllWeightings(sharpTable);

  expect(result[0].getImpactWeighting()).toBe(config.SITE_DISTIBUTION.front
                                       *config.SURFACE_DISTRIBUTION.flat
                                       *config.VELOCITY_DISTRIBUTION[`${config.VNJ}`]);
  expect(result[22].getImpactWeighting()).toBe(config.SITE_DISTIBUTION.left
                                        *config.SURFACE_DISTRIBUTION.kerb
                                        *config.VELOCITY_DISTRIBUTION[`${config.VNO}`]);
  expect(result[44].getImpactWeighting()).toBe(config.SITE_DISTIBUTION.crown
                                        *config.SURFACE_DISTRIBUTION.oblique
                                        *config.VELOCITY_DISTRIBUTION[`${config.VOM}`]);
})

test(`Calculates weighted fatality risk for each test`, function () {
  let sharpTable = sharp.createTable();
  //set peak acceleration and fatality risk for each test respectively from 0 to 44 and 1 to 45
  for(let i in sharpTable) {
    sharpTable[i].setFatalityRisk(Number(i));
    sharpTable[i].setImpactWeighting(Number(i)+1);
  }
  const result = sharp.calculateAllWeightedFatalityRisks(sharpTable);

  expect(result[0].getWeightedFatalityRisk())
   .toBe(0*1);
  expect(result[22].getWeightedFatalityRisk())
   .toBe(22*23);
  expect(result[44].getWeightedFatalityRisk())
   .toBe(44*45);
})


test('Calculate total weighted fatality risk of a sharpTable', function () {
  let sharpTable = sharp.createTable();
  //set weighted fatality risk for each test from 0 to 44
  for(let i in sharpTable) {
    sharpTable[i].setWeightedFatalityRisk(Number(i));
  }
  const result = sharp.calculateTotalWeightedFatalityRisk(sharpTable);

  const EXPECTED_SUM = (0+44)*45/2;
  expect(result).toBe(EXPECTED_SUM);
})