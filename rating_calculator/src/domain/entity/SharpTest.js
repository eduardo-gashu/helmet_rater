class SharpTest {
  constructor ( attr ) {
    if(!attr.test_number)
      throw new Error(`SharpTest class error: test_number is necessary in constructor`);
    this.test_number = attr.test_number;
    this.anvil = attr.anvil || null;
    this.impact_velocity = attr.impact_velocity || null;
    this.impact_site = attr.impact_site || null;

    this.peak_acceleration = attr.peak_acceleration || null;
    this.fatality_risk = attr.fatality_risk || null;
    this.impact_weighting = attr.impact_weighting || null;
    this.weighted_fatality_risk = attr.weighted_fatality_risk || null;
  }
}

module.exports = SharpTest;