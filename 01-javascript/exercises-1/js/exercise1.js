/*

The Age Calculator

Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.

*/

var calculateAge = function (birthYear) {
  var today = new Date();
  var currentYear = today.getFullYear();

  var age1 = currentYear - birthYear;
  var age2 = age1 - 1;

  var message = "They are either " + age1 + " or " + age2;
  console.log(message);
}

calculateAge(1927, 2016);
calculateAge(2015, 2016);
calculateAge(0, 2016);
