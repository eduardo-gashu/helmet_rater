class Test {
  constructor ( attr ) {
    this.testNumber = attr.testNumber;
    this.anvil = attr.anvil;
    this.impactVelocity = attr.impactVelocity;
    this.impactLocation = attr.impactLocation;

    this.peakAcceleration = null;
    this.riskOfFatality = null;
    this.impactWeightning = null;
    this.weightedRiskOfFatality = null;
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