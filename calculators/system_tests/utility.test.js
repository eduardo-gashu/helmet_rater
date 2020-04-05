const XYTable = require('../src/utility/xy_table');
const Point = require('../src/utility/point');


test(`Creates a empty XYTable`, function () {
  const xy = new XYTable();

  const length = xy.getLength();

  expect(length).toBe(0);
})

test(`Adds two points (x,y): A = (1, 1) and B = (2, 2) to a XYTable`, function () {
  const A = new Point( {x: 1, y: 1} );
  const B = new Point( {x: 2, y: 2} );
  let xy = new XYTable();

  const length1 = xy.addPoint(A);
  const length2 = xy.addPoint(B);
  const points = xy.getAllPoints();

  expect(length1).toBe(1);
  expect(length2).toBe(2);
  expect(points[0].x).toEqual(1);
  expect(points[0].y).toEqual(1);
  expect(points[1].x).toEqual(2);
  expect(points[1].y).toEqual(2);
})

test(`Sort a XYTable by its points x`, function () {
  const A = new Point( { x: 10 } );
  const B = new Point( { x: 2 } );
  const C = new Point( { x: 1 } );
  const D = new Point( { x: 3 } );
  let xy = buildXYTable( [A, B, C, D] );

  const result = xy.sortByX();

  expect(result[0].x).toBe(1);
  expect(result[1].x).toBe(2);
  expect(result[2].x).toBe(3);
  expect(result[3].x).toBe(10);
})

test(`Given A = { x: 0, y: 0 }, B = { x: 5, y: 5 } and x = 4, get y = 4 by linear interpolation`, function () {
  const A = new Point( { x: 0, y: 0 } );
  const B = new Point( { x: 5, y: 5 } );
  const x = 4;

  const result = Point.interpolateY( x, A, B );

  expect(result).toBe(4);
})

test(`Given point A = { x: 3, y: 4 }, point B = { x: 7, y: 6 } and x = 5, get y = 5 by linear interpolation`, function () {
  const A = new Point( { x: 3, y: 4 } );
  const B = new Point( { x: 7, y: 6 } );
  const x = 5;

  const result = Point.interpolateY( x, A, B );

  expect(result).toBe(5);
})

test(`Given a XYTable with points (0, 0), (1, 1), (2, 2), (3, 3) and a x = 2.5 , find A and B that A.x < x < B.x`, function () {
  const A = new Point( { x: 0, y: 0 } );
  const B = new Point( { x: 1, y: 1 } );
  const C = new Point( { x: 2, y: 2 } );
  const D = new Point( { x: 3, y: 3 } );
  const x = 2.5;
  let xy = buildXYTable( [A, B, C, D] );

  const { lower, upper } = xy.findXIntervalLimits(x);

  expect(lower.x).toBe(2);
  expect(lower.y).toBe(2);
  expect(upper.x).toBe(3);
  expect(upper.y).toBe(3);
})

test(`Given a XYTable with points (0, 0), (1, 5), (3, -2) and (4, 5) and a x = 2 , calculates a aproximated y(x) = 1.5`, function () {
  const A = new Point( { x: 0, y: 0 } );
  const B = new Point( { x: 1, y: 5 } );
  const C = new Point( { x: 3, y: -2 } );
  const D = new Point( { x: 4, y: 5 } );
  const x = 2;
  let xy = buildXYTable( [A, B, C, D] );

  const result = xy.aproximateY(x);

  expect(result).toBe(1.5);
})

function buildXYTable( points ) {
  let xy = new XYTable();
  for( let point of points ) {
    xy.addPoint( point );
  }
  return xy;
}