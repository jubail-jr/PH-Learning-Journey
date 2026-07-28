// This function should return "Pass" if a score is 50 or above, otherwise "Fail". It gives the wrong result for a score of exactly 50.

function checkScore(score) {
  if (score >= 50) { //Find: mising equal sign
    return "Pass";
  } else {
    return "Fail";
  }
}

console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); // Expected: "Fail"
