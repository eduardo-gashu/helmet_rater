const readRawTests = require("./readRawTests");
const calculateResultantGs = require("./calculations/calculateResultantGs");
const calculateAbsoluteMaximun = require("./calculations/calculateAbsoluteMaximun");
const calculateTimeToValue = require("./calculations/calculateTimeToValue");
const calculateHIC = require("./calculations/calculateHIC");
const calculateTimeOver150g = require("./calculations/calculateTimeOver150g");
const createPreLinearTests = require("./tableCreations/createPreLinearTests");
const createPreObliqueTests = require("./tableCreations/createPreObliqueTests");
const writePreLinearTests = require("./writePreLinearTests");
const writePreObliqueTests = require("./writePreObliqueTests");

module.exports = {
  readRawTests,
  calculateResultantGs,
  calculateAbsoluteMaximun,
  calculateTimeToValue,
  calculateHIC,
  calculateTimeOver150g,
  createPreLinearTests,
  createPreObliqueTests,
  writePreLinearTests,
  writePreObliqueTests
}