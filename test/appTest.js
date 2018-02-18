const assert = require('chai').assert;
const app = require("../src/js/main.js");


let string1 = "X X X X X X X X X X X X";
let string2 = "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-";
let string3 = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5";
let bowlingScoreStrike = app.bowlingScore(string1);
let bowlingScoreSpare = app.bowlingScore(string2);
let bowlingScorePin9 = app.bowlingScore(string3);
let validationStrike = app.validation(string1);
let validationScoreSpare = app.validation(string2);
let validationScorePin9 = app.validation(string3);



describe("bowlingRepoApplication", () => {
  describe("having all strikes:", () => {
    it("out put should equal to 300", () => {
      assert.equal(bowlingScoreStrike, 300);
    });
  });
  describe("having all spare:", () => {
    it("out put should equal to 300", () => {
      assert.equal(bowlingScoreSpare, 90);
    });
  });
  describe("having all socres 9 each frame:", () => {
    it("out put should equal to 300", () => {
      assert.equal(bowlingScorePin9, 150);
    });
  });
  describe("validate the all strikes input string ", () => {
    it("should return true:", () => {
      assert.equal(validationStrike, true);
    });
  });
  describe("validate the all spares input string:", () => {
    it("should return true:", () => {
      assert.equal(validationScoreSpare, true);
    });
  });
  describe("having all scores 9 each frame:", () => {
    it("should return true:", () => {
      assert.equal(validationScorePin9, true);
    });
  });
});