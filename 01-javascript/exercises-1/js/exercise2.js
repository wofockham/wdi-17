/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/

var calculateSupply = function (age, amountPerDay) {
  var maximumAge = 110;

  var amountPerYear = amountPerDay * 365.25;
  var yearsRemaining = maximumAge - age;
  var amountRequired = amountPerYear * yearsRemaining;

  var message = "You will need " + amountRequired + " to last you until the ripe old age of " + maximumAge;
  console.log(message);
};

calculateSupply(89, 4);
calculateSupply(22, 4);
