/*

The Age Calculator

Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.

*/

var currentYear = 2016;
var birthYear = 1927;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

var message = "They are either " + age1 + " or " + age2;
console.log(message);
