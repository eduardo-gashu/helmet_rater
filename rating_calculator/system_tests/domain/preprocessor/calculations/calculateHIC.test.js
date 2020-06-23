const {calculateHIC} = require("../../../../src/domain/preprocessor");
const {HIC_DELTA_T} = require("../../../../src/domain/preprocessor/preConfig")

test(`for all acceleration recods = 1, it should return hic = 0.036`,
function (){
  let accelerations = []
  for(let i=0; i<1000; i++){
    accelerations.push({g:1});
  }

  const result = calculateHIC(accelerations);

  expect(result.hic).toBe(0.015);
});

test(`for 577 acceleration records = 1 and the rest of acceleration records = 0,
it should return hic = 0.036`,
function (){
  let accelerations = [];
  for(let i=0; i<423; i++){
    accelerations.push({g:0});
  }
  for(let i=0; i<577; i++){
    accelerations.push({g:1});
  }

  const result = calculateHIC(accelerations);

  expect(result.hic).toBe(0.015);
});

test(`for 577 acceleration records = 1 and the rest of acceleration records = 0,
it should return hic = 0.036`,
function (){
  let accelerations = [];
  for(let i=0; i<423; i++){
    accelerations.push({g:0});
  }
  for(let i=0; i<577; i++){
    accelerations.push({g:60});
  }

  const result = calculateHIC(accelerations);

  const expected = Math.pow(60,2.5)*HIC_DELTA_T/1000
  expect(result.hic).toBeCloseTo(418.282);
});