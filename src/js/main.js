function bowlingScore(bowlingSequenceValues) {

  let bsv = bowlingSequenceValues;
  //serparate them by spaces
  let pS = processString(bsv);
  //pair them
  let pairs = pairThem(pS);
  //score the pairs
  return scorePairs(pairs);
  //return the number score

}
function scorePairs(pairs) {
  //define the variables

  let score = 0;
  let pLen = pairs.length;
  let tempH = "";
  let regEx1 = new RegExp(/[0-9]/);

  //go through array 
  for (let i = 0; i < 10; i += 1) {
    //loop for a  max 10 times
    tempH = pairs[i];
    // determine the score using function
    score += determineScore(tempH);
    //needs correction with the numbers of x preseneted
    if (pairs[i + 1]) {
      let c1 = pairs[i].charAt(0);
      let c2 = pairs[i].charAt(1);
      //look ahead of the and determine a score will be added
      //check if the next frame is a strike and see if you need to add to the score
      if (c1 === "X") score += determineScore(pairs[i + 1]);
      //check if the next next frame is a strike and see if you need to add to the score
      if (pairs[i + 2] && c1 === "X" && pairs[i + 2].charAt(0) === "X") {
        score += determineScore(pairs[i + 2]);
      }
      //check if there is a number for the last frame
      if (i == 9 && pairs[i + 1] && !isNaN(pairs[i + 1].charAt(0)) && pairs[i].charAt(1) !== "/") {

        score += determineScore(pairs[i + 1]);

      }
      if (i == 9 && pairs[i + 2] && !isNaN(pairs[i + 2].charAt(0)) && pairs[i].charAt(1) !== "/") {
        score += determineScore(pairs[i + 2]);

      }

      //for this spare add the throw of the next frame  
      if (c2 === "/") {
        c1 = pairs[i + 1].charAt(0);
        c2 = pairs[i + 1].charAt(1);
        score += determineScore(c1 + "-");

      }
    }

  }

  // return the score calculated
  return score;
}

function determineScore(pair) {

  let c1 = pair.charAt(0);
  let c2 = pair.charAt(1);
  //check for strikes (X) and add 10 point
  if (c1 === "X") return 10;
  //check for spares (/) and add 10 points
  if (c2 === "/") return 10;
  //check for numbers and add that number as points
  if (c1 !== "-" && c2 !== "-") return parseInt(c1) + parseInt(c2);
  //check if on of the pairs has a "-" and return the other character as point
  if (c1 !== "-") return parseInt(c1);
  if (c2 !== "-") return parseInt(c2);



}

function pairThem(pS) {
  let resultedPairs = [];

  //go through the arrray as pairs
  for (let i = 0; i < pS.length; i += 2) {

    let ps1 = "";
    let ps2 = "";
    //let string4 = "17 53 5/ 9/ X 41 42 53 8/ X X X";
    if (pS[i] === "X") {
      ps1 = pS[i];
      ps2 = "-";
      resultedPairs.push(ps1 + ps2);
      // look ahead one more frame since the loop is incrementing by two
      if (pS[i + 1] && pS[i + 1] === "X") {
        resultedPairs.push(pS[i + 1] + "-");
        //add another frame if the 11th frame was strike
        if (i == 10 && pS[i + 2]) {
          resultedPairs.push(pS[i + 1] + "-");
        }
      }


    } else {
      ps1 = pS[i];
      //if the last index is not pair then add a space to the end of the character
      ps2 = pS[i + 1] ? pS[i + 1] : "-";
      resultedPairs.push(ps1 + ps2);
    }

  }

  return resultedPairs;
}

function processString(stringV) {

  // stringV.split();
  let stringLen = stringV.trim().length;
  processedString = "";

  for (let i = 0; i < stringLen; i++) {
    if (stringV[i] == "x" || stringV[i] == "X" || stringV[i] == "/" || stringV[i] == "-" || !isNaN(stringV[i])) {
      if (stringV[i] === " ") continue;
      if (stringV[i] == "x" || stringV[i] == "X") {
        processedString += "X ";
        continue;
      }

      processedString += stringV[i];

    }

  }
  return processedString;
}
let string4 = "17 53 5/ 9/ X 41 42 53 8/ X X X";

// Validate the input. Identify sequences of input that do not constitute valid games. 
// Specifically, the number of knocked-down (not bonus) pins in each frame must not exceed 10. 
// Additionally, there must be exactly 10 frames total (allowing necessary bonus throws). 
// Expand your test cases to cover this.


function validation(s) {
  let results1 = validateRegEx(s);
  let results2 = validNumberOfPins(s);
  let results3 = validNumberOfFrames(s);

  if (typeof results1 !== "string" && typeof results2 !== "string" && typeof results3 !== "string") return true;
  if (typeof results1 == "string") return "validateRegEx failed and returned: " + results1;
  if (typeof results2 == "string") return " validNumberOfPins failed and returned: " + results2;
  if (typeof results3 == "string") return " validNumberOfFrames  failed and returned: " + results3 + ".";;


  return "some other error";
}


function validNumberOfFrames(s) {
  let results = pairThem(processString(s));
  let resLen = results.length;

  if (resLen === 10) return true;
  if (resLen === 11) {
    //check that the 10th frame is a spare
    if (results[9].charAt(1) === "/") return true;
    //check if the 10 frame is a strike
    if (results[9].charAt(0) === "X") return true;

    return "the length of the input is 11 the last frame has incorrect input";
  }
  //check for that last possible strike
  if (resLen === 12) {
    //check for the last possible frame to be a strike
    if (results[10].charAt(0) === "X") return true;
    //return 
    return "the length of the input is 12 snd the last frame has incorrect input which should X";
  }
  //after failling  all checks 
  return "string has wrong amount of frames";

}

function validNumberOfPins(s) {
  let results = pairThem(processString(s));
  let c1 = "";
  let c2 = "";
  let unit = "";
  let regEx1 = new RegExp(/[0-9]/);

  //loop through the whole array
  for (let i = 0; i < results.length; i += 1) {
    unit = results[i];
    c1 = unit.charAt(0);
    c2 = unit.charAt(1);
    //validate the possible characters

    if (c1 === "x" || c1 === "X") c1 = "X";
    if (c1 !== "X" && c1 !== "-" && !regEx1.test(parseInt(c1))) { return "first character in " + unit + " does not contain the right characters"; }
    if (c2 !== "/" && c2 !== "-" && !regEx1.test(parseInt(c1))) { return "second character in " + unit + " does not contain the right characters"; }
    // validate the right possible scenarios, there are 7 scenarios to check;
    let c3 = c1 + c2;
    if (c3 === "X-" || c3 === "--" || c3 === "-/") continue;
    if (regEx1.test(c1) && c2 === "-") continue;
    if (regEx1.test(c1) && c2 === "/") continue;
    if (c1 === "-" && regEx1.test(c2)) continue;
    //check if the numer range is correct
    if (regEx1.test(c3)) continue;

    return "does not have the right amount of pins or the right amount of  combination"
  }

  //did  meet the possible combination or number of pins
  return true;
}

function validateRegEx(s) {

  let regEx1 = new RegExp(/[0-9\-\/\X ]/);
  return regEx1.test(s) ? true : "in valid set of characters,\nplease verify characters are 0-9, /, X ";

}

module.exports = {

  bowlingScore,
  validation
};
