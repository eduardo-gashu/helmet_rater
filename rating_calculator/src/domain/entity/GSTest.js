class GSTest {
  constructor ( attr ) {
    if(!attr.test_number)
      throw new Error(`GSTest class error: test_number is necessary in constructor`);
    this.test_number = attr.test_number;
    this.anvil = attr.anvil || null;
    this.impact_velocity = attr.impact_velocity || null;
    this.impact_site = attr.impact_site || null;

    this.hic = attr.hic || null;
    this.fatality_risk = attr.fatality_risk || null;
    this.impact_weighting = attr.impact_weighting || null;
    this.weighted_fatality_risk = attr.weighted_fatality_risk || null;
  }
}

module.exports = GSTest;