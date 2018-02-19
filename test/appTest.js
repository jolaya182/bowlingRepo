const assert = require('chai').assert;
const app = require("../src/js/main.js");

//test cases
let string1 = "X X X X X X X X X X X X";
let string2 = "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-";
let string3 = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5";
let string4 = "17 53 5/ 9/ X 41 42 53 8/ X X X";
let string5 = "44 44 44 54 5/ X X X X X X 9";

//call in function and pass the test cases
let bowlingScoreStrike = app.bowlingScore(string1);
let bowlingScorePin9 = app.bowlingScore(string2);
let bowlingScoreSpare = app.bowlingScore(string3);
let bowlingScore139 = app.bowlingScore(string4);
let bowlingScore202 = app.bowlingScore(string5);

//call in validation functions and pass in test cases
let validationStrike = app.validation(string1);
let validationScorePin9 = app.validation(string2);
let validationScoreSpare = app.validation(string3);
let validationScore139 = app.validation(string4);
let validationScore202 = app.validation(string5);

 

describe("bowlingRepoApplication", () => {
  describe("having all strikes:", () => {
    it("out put should equal to 300", () => {
      assert.equal(bowlingScoreStrike, 300);
    });
  });
  describe("having all scores 9 all frames:", () => {
    it("out put should equal to 90", () => {
      assert.equal(bowlingScorePin9, 90);
    });
  });
  describe("having all spare:", () => {
    it("out put should equal to 150", () => {
      assert.equal(bowlingScoreSpare, 150);
    });
  });
  describe("validate the all strikes input string ", () => {
    it("should return true:", () => {
      assert.equal(validationStrike, true);
    });
  });
  describe("having all scores of 9s in each frame:", () => {
    it("should return true:", () => {
      assert.equal(validationScorePin9, true);
    });
  });
  describe("validate the all spares input string:", () => {
    it("should return true:", () => {
      assert.equal(validationScoreSpare, true);
    });
  });
  describe("having a total score of 139 for all frames:", () => {
    it("should  return 139:", () => {
      assert.equal(bowlingScore139, 139);
    });
  });
  describe("having a total score of 139 validated  frames:", () => {
    it("It should return true :", () => {
      assert.equal(validationScore139, true);
    });
  });
  describe("having a total score of 202 for all frames:", () => {
    it("should  return 202:", () => {
      assert.equal(bowlingScore202, 202);
    });
  });
  describe("having a total score of 202 validated frames:", () => {
    it("It should return true :", () => {
      assert.equal(validationScore202, true);
    });
  });
});