const {calculateMu} = require("../../../../src/sharp/domain/sharpRater");

test (`It should calculate mean Mu, given preObliqueTests`, function (){
  const leftObliqueTest = {
    abs_max_lat_force: 100,
    abs_max_norm_force: 400,
  };
  const rightObliqueTest = {
    abs_max_lat_force: 300,
    abs_max_norm_force: 400,
  };

  const result = calculateMu( [leftObliqueTest,rightObliqueTest] );

  expect(result).toBe(0.5);
})