const {calculateResultantGs} = require("../../../../src/domain/preprocessor");
const { sqrt } = require("mathjs");

test(`Given records of Gs, it should return each absolute G`, function () {
  const record1 = { vert_g:"7", front_g:"0", left_g: "0" };
  const record2 = { vert_g:"0", front_g:"7", left_g: "0" };
  const record3 = { vert_g:"0", front_g:"0", left_g: "7" };
  const record4 = { vert_g:"-3", front_g:"-4", left_g: "-5" };
  const records = [record1,record2,record3,record4]

  const result = calculateResultantGs(records);

  expect(result[0]["resultant_g"]).toBe(7);
  expect(result[1]["resultant_g"]).toBe(7);
  expect(result[2]["resultant_g"]).toBe(7);
  expect(result[3]["resultant_g"]).toBe(5*sqrt(2));
})