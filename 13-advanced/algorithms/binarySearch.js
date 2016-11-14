var input = [1, 3, 4, 5, 8, 9, 23, 1001]; // Make sure this is sorted

// Returns the index of needle in haystack using a binary search algorithm
var binarySearch = function (haystack, needle) {
  var start = 0;
  var end = haystack.length - 1;
  while (start <= end) { // HAXX! You are not expected to understand this.
    var middle = Math.ceil( (start + end) / 2 );

    if (haystack[middle] === needle) {
      return middle; // Found it.
    }

    // Match not found, update the range to discard either the left or the right.
    if (haystack[middle] > needle) { // discard the right hand side
      end = middle - 1;
    } else { // discard the left hand side
      start = middle + 1;
    }
  }

  return -1; // Needle not found.
}

// // Test with every possible valuable in the array.
// for (var i = 0; i < input.length; i++) {
//   var n = input[i];
//   console.log( binarySearch(input, n)  );
// }
// // Test a value not in the array
// console.log( binarySearch(input, 2) );
