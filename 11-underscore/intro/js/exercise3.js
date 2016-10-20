var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];


// Create an array of every five numbers between 30 and 101
var fives = _.range(30, 101, 5);
console.log(fives);

// Turn bumpyArr into one flat array (no nested arrays)
var flatOne = _(bumpyArr).flatten();
console.log(flatOne);

// Remove all of the falsey elements in the uncompactedArr
var compactedArray = _(uncompactedArr).compact();
console.log(compactedArray);

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
// var part1 = _([ 1, 25, 100 ]).union([ 1, 14, 25 ]);
// var part2 = _(part1).union([24, Infinity, -0]);
// var uniqueElements = _(part2).uniq();
var uniqueElements = _([ 1, 25, 100 ]).chain()
                      .union([ 1, 14, 25 ])
                      .union([24, Infinity, -0])
                      .uniq()
                      .value();
console.log(uniqueElements);

// Find the index of the first element in numbers that is over 7 and is even
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var index = _(numbers).findIndex(function (n) {
  if (n <= 7) return false; // Skip numbers less than or equal to 7
  return n % 2 === 0; // Check for evenness.
});
console.log(index, numbers[index]);

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];
// var object = _( _(arrToTransform).unzip() ).object();
var object = _(arrToTransform).chain().unzip().object().value();
console.log(object);
