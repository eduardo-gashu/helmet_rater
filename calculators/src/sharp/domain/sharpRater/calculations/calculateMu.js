module.exports = calculateMu;

function calculateMu(preObliqueTests){
  const leftTangentForce = Number(preObliqueTests[0].abs_max_lat_force);
  const leftNormalForce = Number(preObliqueTests[0].abs_max_norm_force);

  const rightTangentForce = Number(preObliqueTests[1].abs_max_lat_force);
  const rightNormalForce = Number(preObliqueTests[1].abs_max_norm_force);

  const leftMu = leftTangentForce/leftNormalForce;
  const rightMu = rightTangentForce/rightNormalForce;

  return (leftMu+rightMu)/2
}