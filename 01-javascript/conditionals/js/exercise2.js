/*
The Grade Assigner

Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

var assignGrade = function (score) {
  if (score >= 80) {
    return 'A';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 60) {
    return 'C';
  } else if (score >= 50) {
    return 'D';
  } else {
    return 'F';
  }
};

console.log( assignGrade(81) );
console.log( assignGrade(71) );
console.log( assignGrade(61) );
console.log( assignGrade(51) );
console.log( assignGrade(50) );
console.log( assignGrade(17) );
