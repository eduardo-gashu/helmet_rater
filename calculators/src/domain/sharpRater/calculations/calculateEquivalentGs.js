module.exports = calculateEquivalentGs;

function calculateEquivalentGs(flatAnvilLinearTests, mu) {
  equivalentGs = [];
  flatAnvilLinearTests.forEach(flatAnvilLinearTest => {
    let equivalentG = calculateEquivalentG(flatAnvilLinearTest, mu);
    equivalentGs.push(equivalentG);
  });

  return equivalentGs;
}

function calculateEquivalentG(flatAnvilLinearTest, mu){
  const acceleration = Number(flatAnvilLinearTest.abs_max_resultant_g)
  const mu_2 = Math.pow(mu,2);
  return acceleration*Math.sqrt(1+mu_2);
}