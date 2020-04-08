const testsReader = require('../tests_reader');

const NORMAL_FORCE_PATH = 'normal_forces/';
const TANGENT_FORCE_PATH = 'tangent_forces/'


module.exports = (path) => {
  const normalizedPath = testsReader.addSlash(path)
  const normalForces = testsReader.getNormalForces(normalizedPath + NORMAL_FORCE_PATH);
  const tangentForces = testsReader.getTangentForces(normalizedPath + TANGENT_FORCE_PATH);

  const [peakLeftNormalForce, peaRightkNormalForce] = testsReader.getAllMaximunValues(normalForces);
  const [peakLeftTangentForce31, peakRightTangentForce32] = testsReader.getAllMaximunValues(tangentForces);

  const muLeft = peakLeftNormalForce/peakLeftTangentForce31;
  const muRight = peaRightkNormalForce/peakRightTangentForce32;

  return (muLeft + muRight)/2;
};
