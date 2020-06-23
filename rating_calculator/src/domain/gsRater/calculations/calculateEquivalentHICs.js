module.exports = calculateEquivalentHICs;

function calculateEquivalentHICs(flatAnvilLinearTests, mu) {
  equivalentHICs = [];
  flatAnvilLinearTests.forEach(flatAnvilLinearTest => {
    let equivalentHIC = calculateEquivalentHIC(flatAnvilLinearTest, mu);
    equivalentHICs.push(equivalentHIC);
  });

  return equivalentHICs;
}

function calculateEquivalentHIC(flatAnvilLinearTest, mu){
  const hic = Number(flatAnvilLinearTest.hic)
  const mu_2 = Math.pow(mu,2);
  const auxConst = Math.sqrt(1+mu_2)
  return hic*Math.pow(auxConst,2.5);
}