const {calculateEquivalentGs} = require("../../../../src/domain/sharpRater");

test (`It should calculate equivalent peak accelerations`, function (){
  const accel1 = 10;
  const accel2 = 100;
  const accel3 = 7;
  const flatAnvillinearTests = [
    {abs_max_resultant_g: accel1},
    {abs_max_resultant_g: accel2},
    {abs_max_resultant_g: accel3},
  ];
  const mu = 0.5;

  const result = calculateEquivalentGs(flatAnvillinearTests, mu);

  const expected1 = accel1*Math.sqrt(1+Math.pow(mu,2));
  const expected2 = accel2*Math.sqrt(1+Math.pow(mu,2));
  const expected3 = accel3*Math.sqrt(1+Math.pow(mu,2));
  expect(result[0]).toBe(expected1);
  expect(result[1]).toBe(expected2);
  expect(result[2]).toBe(expected3);
})