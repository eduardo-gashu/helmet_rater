const calculateResultantGs = require("./calculations/calculateResultantGs");
const calculateAbsoluteMaximun = require("./calculations/calculateAbsoluteMaximun");
const calculateTimeToValue = require("./calculations/calculateTimeToValue");
const calculateHIC = require("./calculations/calculateHIC");
const calculateTimeOver150g = require("./calculations/calculateTimeOver150g");
const createPreLinearTests = require("./tableCreations/createPreLinearTests");
const createPreObliqueTests = require("./tableCreations/createPreObliqueTests");

module.exports = {
  calculateResultantGs,
  calculateAbsoluteMaximun,
  calculateTimeToValue,
  calculateHIC,
  calculateTimeOver150g,
  createPreLinearTests,
  createPreObliqueTests
}