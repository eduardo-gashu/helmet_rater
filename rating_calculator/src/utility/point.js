class Point {
  constructor (attr) {
    this.x = attr.x || 0;
    this.y = attr.y || 0;
  }

  static interpolateY (x, A, B) {
    // line equation: y = a0 + a1*x;
    const deltaY = (B.y-A.y);
    const deltaX = (B.x-A.x);
    const a1 = deltaY/deltaX;
    const a0 = A.y - (a1 * A.x);
    return ( a0 + a1 * x );
  }

  static interpolateX ( y, A, B ) {
    // line equation: x = (y - a0)/a1
    const deltaY = (B.y-A.y);
    const deltaX = (B.x-A.x);
    const a1 = deltaY/deltaX;
    const a0 = A.y - (a1 * A.x);
    return ( (y - a0)/a1 );
  }
}

module.exports = Point;