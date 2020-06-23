const {calculateEquivalentHICs} = require("../../../../src/domain/gsRater");

test (`It should calculate equivalent hic`, function (){
  const hic1 = 10;
  const hic2 = 100;
  const hic3 = 7;
  const flatAnvillinearTests = [
    {hic: hic1},
    {hic: hic2},
    {hic: hic3},
  ];
  const mu = 0.5;

  const result = calculateEquivalentHICs(flatAnvillinearTests, mu);

  const auxConst = Math.sqrt( 1 + Math.pow(mu,2) );
  const expected1 = hic1*Math.pow(auxConst, 2.5);
  const expected2 = hic2*Math.pow(auxConst, 2.5);
  const expected3 = hic3*Math.pow(auxConst, 2.5);
  expect(result[0]).toBe(expected1);
  expect(result[1]).toBe(expected2);
  expect(result[2]).toBe(expected3);
})