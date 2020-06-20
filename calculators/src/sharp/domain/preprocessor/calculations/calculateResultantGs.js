module.exports = calculateResultantGs;

function calculateResultantGs (vectorialGs) {
  return vectorialGs.map(vectorialG => {
    return {
      resultant_g: calculateAbsolute(Number(vectorialG.vert_g),
                                    Number(vectorialG.front_g),
                                    Number(vectorialG.left_g))
    }
  });
}

function calculateAbsolute(x,y,z) {
  var quadraticSum = Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2);
  return Math.sqrt(quadraticSum);
}