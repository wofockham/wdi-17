// We use callbacks with setInterval and setTimeout
setInterval(function () { // Anonymous callback function
  console.log('3 seconds have passed', Math.random());
}, 3000);

var hello = function () {
  console.log('hello!');
};
setInterval(hello, 2000); // Named callback function

// We use callbacks with jQuery to wait for the DOM to ready
$(document).ready(function  () {
  console.log('the document is ready');
  $('body').css('background-color', 'blue');
  $('button').on('click', fadeBill); // Event handlers use callbacks
});

var fadeBill = function () {
  $('img').fadeIn(4000);
};

// ES5 callback example
var bros = ['groucho', 'harpo', 'chico', 'gummo'];
bros.forEach(function (name) {
  console.log("I love " + name);
});






// Callbacks can make code run out of order
// You have to pay close attention!

// First thing: output
console.log('hotdogs');

// Second thing: sets up output FOR LATER
$(document).ready(function () {
  // Fourth thing: output
  console.log('Ludwig');
})

// Third thing: output
console.log('butterflies');

// Output will appear in this order:
// hotdogs
// butterflies
// Ludwig
