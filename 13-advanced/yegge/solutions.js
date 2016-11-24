////////////////////////////////////////////////////////////////////////////////
// Write a function to reverse a string.
var reverse = function (s) {
  return s.split('').reverse().join(''); // This is probably cheating.
};

var reverse = function (s) { // Iterative (you could also use map() or similar).
  var output = '';
  for (var i = s.length - 1; i >= 0; i--) {
    output += s[i];
  }
  return output;
};

var reverse = function (s) { // Fancy recursive version.
  if (s.length <= 1) {
    return s;
  } else {
    return reverse(s.slice(1)) + s[0];
  }
}

console.log('reverse: ', reverse('god is a hotdog'));

////////////////////////////////////////////////////////////////////////////////
// Write function to compute Nth fibonacci number:
var fibonacci = function (n) { // Iterative version.
  var a = b = 1; // We already know the first 2 fibonacci values are both 1.
  for (var i = 3; i <= n; i++) {
    var newB = a + b;
    a = b;
    b = newB;
  }
  return b;
}

var fibonacci = function (n) { // Slow recursive version.
  if (n <= 2) {
    return 1; // Base case
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Fast fibonacci is left as an exercise to the reader.

console.log('fibonacci', fibonacci(7)); // Expect 13

////////////////////////////////////////////////////////////////////////////////
// Print out the grade-school multiplication table up to 12x12
var twelveTimesTables = function () {
  for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 12; j++) {
      // You might like to pad the output so it lines up neatly.
      console.log(i + ' x ' + j + ' = ' + (i*j));
    }
  }
}

console.log('multiplication');
twelveTimesTables();

// Write a function that sums up integers from a text file, one int per line.
// Write function to print the odd numbers from 1 to 99.
// Find the largest int value in an int array.
// Format an RGB value (three 1-byte numbers) as a 6-digit hexadecimal string.
