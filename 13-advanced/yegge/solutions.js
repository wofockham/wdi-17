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

// Write function to compute Nth fibonacci number:
// Print out the grade-school multiplication table up to 12x12
// Write a function that sums up integers from a text file, one int per line.
// Write function to print the odd numbers from 1 to 99.
// Find the largest int value in an int array.
// Format an RGB value (three 1-byte numbers) as a 6-digit hexadecimal string.
