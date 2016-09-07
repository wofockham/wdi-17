/*
The Geometrizer

Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

var radius = 10;

var circumference = 2 * radius * Math.PI;
var message1 = "The circumference is " + circumference;
console.log(message1);

var area = Math.PI * radius * radius;
var message2 = "The area is " + area;
console.log(message2);
