// Explain this function out loud, line by line, to find the bug. It should return true if a string is empty, otherwise false.

// Bug: explain this line out loud — what does str.length actually equal for ""?
 
function isEmpty(str) {
//   if (str.length = 0) { // find the bug
    if (str.length === 0){ //Find
    return true;
  } else {
    return false;
  }
}
 
console.log(isEmpty(""));  // Expected: true
console.log(isEmpty("hi")); // Expected: false
