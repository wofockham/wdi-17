/*
The Geometrizer

Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

var calcCircumference = function (radius) {
  var circumference = 2 * radius * Math.PI;
  var message = "The circumference is " + circumference;
  console.log(message);
};

var calcArea = function (radius) {
  var area = Math.PI * radius * radius;
  var message = "The area is " + area;
  console.log(message);
};

calcCircumference(10);
calcArea(10);
