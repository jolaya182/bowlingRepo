function bowlingScore(bowlingSequenceValues) {

  let bsv = bowlingSequenceValues;
  //scenario 1
  //X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300

  //scenario 2 
  //9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90

  //scenario 3
  //5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150


  //get each character
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
  //go through array 
  for (let i = 0; i < 10; i += 1) {
    //shift out each pair from the index only for  a max 10 times
    tempH = pairs[i];
    // determine the score using function
    score += determineScore(tempH);
    //needs correction with the numbers of x preseneted
    if (pairs[i + 1]) {
      let c1 = pairs[i].charAt(0);
      let c2 = pairs[i].charAt(1);
      //check if the next frame is a strike and see if you need to add to the score
      if (c1 === "X") score += determineScore(pairs[i + 1]);
      //check if the next next frame is a strike and see if you need to add to the score
      if (c1 === "X" && pairs[i + 2]) score += determineScore(pairs[i + 2]);

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
  //console.log( resultedPairs);
  return resultedPairs;
}

function processString(stringV) {

  // stringV.split();
  let stringLen = stringV.trim().length;
  processedString = "";

  for (let i = 0; i < stringLen; i++) {
    if (stringV[i] == "x" || stringV[i] == "X" || stringV[i] == "/" || stringV[i] == "-" || !isNaN(stringV[i])) {
      if (stringV[i] === " ") continue;
      if (stringV[i] == "x") stringV[i] = stringV[i].toUpperCase();
      processedString += stringV[i];

    }

  }
  return processedString;
}

let string1 = "X X X X X X X X X X X X";
let string2 = "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-";
let string3 = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5";
console.log(bowlingScore(string1));
console.log(bowlingScore(string2));
console.log(bowlingScore(string3));

// Validate the input. Identify sequences of input that do not constitute valid games. 
// Specifically, the number of knocked-down (not bonus) pins in each frame must not exceed 10. 
// Additionally, there must be exactly 10 frames total (allowing necessary bonus throws). 
// Expand your test cases to cover this.

function validation(s){
  validNumberOfPins();
  validNumberOfFrames()
}

function validNumberOfPins(){

}

function validNumberOfFrames(){

}