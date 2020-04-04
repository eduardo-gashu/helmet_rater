const sharp = require('./sharp');
const testsReader = require('./tests_reader');
const mathjs = require('mathjs')


/* Reading the impact tests results */
const normalAccelerations = testsReader.getAccelerations();
const normalForces = testsReader.getNormalForces();
const tangentialForces = testsReader.getTangentialForces();

const peakNormalAccelerations = sharp.getAllMaximunValues( normalAccelerations );
const peakNormalForces = sharp.getAllMaximunValues( normalForces );
const peakTangentialForces = sharp.getAllMaximunValues( tangentialForces );

const NORMAL_FORCE_31 = peakNormalForces[0];
const NORMAL_FORCE_32 = peakNormalForces[1];
const TANGENCIAL_FORCE_31 = peakTangentialForces[0];
const TANGENCIAL_FORCE_32 = peakTangentialForces[1];

/* Computing the friction coefitient */
const MI_31 = NORMAL_FORCE_31/TANGENCIAL_FORCE_31;
const MI_32 = NORMAL_FORCE_32/TANGENCIAL_FORCE_32;

const MI = mathjs.mean([MI_31, MI_32]);

/* Computing the oblique equivalent speeds */
const OBLIQUE_IMPACT_ANGLE = 37.5;

const VN1 = 6;
const VN2 = 7.5;
const VN3 = 8.5;

const VR1 = VN1/mathjs.sin( OBLIQUE_IMPACT_ANGLE );
const VR2 = VN2/mathjs.sin( OBLIQUE_IMPACT_ANGLE );
const VR3 = VN3/mathjs.sin( OBLIQUE_IMPACT_ANGLE );

/* Computing equivalent oblique peak acceleration from flat anvil impact*/
const flatAvilPeakNormalAccelerations = peakNormalAccelerations.slice(0, 15);
const peakEquivalentObliqueAccelerations = flatAvilPeakNormalAccelerations
                                    .map( acceleration => acceleration*mathjs.nthRoot( (1+MI), 2 ) );

const allPeakAccelerations = peakNormalAccelerations.concat( peakEquivalentObliqueAccelerations );

