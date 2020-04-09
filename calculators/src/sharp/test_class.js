class Test {
  constructor ( attr ) {
    if( attr.testNumber == undefined ) {
      return console.error('Test Error: no numberTest');
    }
    this.testNumber = attr.testNumber;
    this.anvil = attr.anvil || null;
    this.impactVelocity = attr.impactVelocity || null;
    this.impactLocation = attr.impactLocation || null;

    this.peakAcceleration = attr.peakAcceleration || null;
    this.riskOfFatality = attr.riskOfFatality || null;
    this.impactWeightning = attr.impactWeightning || null;
    this.weightedRiskOfFatality = attr.weightedRiskOfFatality || null;
  }

  //getters
  getTestNumber() {
    return this.testNumber;
  }
  getAnvil() {
    return this.anvil;
  }
  getImpactVelocity() {
    return this.impactVelocity;
  }
  getImpactLocation() {
    return this.impactLocation;
  }
  getPeakAcceleration() {
    return this.peakAcceleration;
  }
  getRiskOfFatality() {
    return this.riskOfFatality;
  }
  getImpactWeightening() {
    return this.impactWeightning;
  }
  getWeightedRiskOfFatality() {
    return this.weightedRiskOfFatality;
  }

  //setters
  setTestNumber( testNumber ) {
    this.testNumber = testNumber;
  }
  setAnvil( anvil ) {
    this.anvil = anvil;
  }
  setImpactVelocity( impactVelocity ) {
    this.impactVelocity = impactVelocity;
  }
  setImpactLocation( impactLocation ) {
    this.impactLocation = impactLocation;
  }
  setPeakAcceleration( peakAcceleration ) {
    this.peakAcceleration = peakAcceleration;
  }
  setRiskOfFatality( riskOfFatality ) {
    this.riskOfFatality = riskOfFatality;
  }
  setImpactWeightening( impactWeightning ) {
    this.impactWeightning = impactWeightning;
  }
  setWeightedRiskOfFatality( weightedRiskOfFatality ) {
    this.weightedRiskOfFatality = weightedRiskOfFatality;
  }
}

module.exports = Test;