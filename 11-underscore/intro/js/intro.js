// COLLECTIONS /////////////////////////////////////////////////////////////////

var nums = [1, 2, 3];
_(nums).each(function (n) {
  console.log(n);
});

var o = {
  'monday': 7,
  'tuesday': 4,
  'wednesday': 3
};
_(o).each(function (total, day) { // Value, key as opposed to Ruby key, value
  console.log('Total for', day, ':', total);
});


// Returns a new array with our callback function applied to each element.
var timesThree = _(nums).map(function (n) {
  return n * 3;
});
console.log(nums, timesThree);

var bros = 'groucho harpo chico'.split(' ');
var formalBros = _(bros).map(function (name) {
  return 'Mr ' + name + ' marx';
});
console.log(formalBros);


// Total the array
var sum = _(nums).inject(function (accumulator, n) {
  return accumulator + n;
});
console.log('The sum of', nums, 'is', sum);


// ActiveRecord style methods
var data = [
  { id: 22, username: "Martin", active: true },
  { id: 23, username: "Max",    active: false},
  { id: 24, username: "Linda",  active: false}
];

var activeUsers = _(data).where({ active: true});
var firstInactiveUser = _(data).findWhere({active: false});

// Filter and reject
var evenNums = _(nums).filter(function (n) {
  return n % 2 === 0; // Even number
});
console.log(evenNums);
var oddNums = _(nums).reject(function (n) {
  return n % 2 === 0; // Even number
});


// Extracting or sorting in arrays of objects
var stooges = [
  {name: 'moe', age: 40},
  {name: 'larry', age: 50},
  {name: 'curly', age: 60}
];

var alphabeticalStooges = _(stooges).sortBy('age');
console.log(alphabeticalStooges);


// Predicates
var data = [1, 2, 3, 4, 5];
var allEven = _(data).every(function (el) {
  return el % 2 === 0;
});
if (allEven) {
  console.log('every element is even');
} else {
  console.log('at least one element is odd');
}

var anyEven = _(data).some(function (el) {
  return el % 2 === 0;
});
console.log(anyEven);


// Plucking and sorting
_(stooges).pluck('name');
_(stooges).min('age');

// Other array tricks
var shuffledData = _(data).shuffle(); // Returns a new shuffled array.
var chooseOne = _(data).sample();
var chooseThree = _(data).sample(3);

var counts = _(data).countBy(function (n) {
  if (n % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
  // return n % 2 === 0 ? 'even' : 'odd';
});

console.log(counts);

_.compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]

_.flatten([1, [2], [3, [[4]]]]); // => [1, 2, 3, 4];
_.flatten([1, [2], [3, [[4]]]], true); // => [1, 2, 3, [[4]]];

_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// => [2, 3, 4]

_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// => [1, 2, 3, 101, 10] - all unique items

_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// => [1, 2] - all items that are present in all arrays

_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
// => [1, 3, 4] - all items that are present in the first array and nowhere else

_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

_.unzip([['moe', 30, true], ["larry", 40, false], ["curly", 50, false]])
// => [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]

_.object(['moe', 'larry', 'curly'], [30, 40, 50]);
// => {moe: 30, larry: 40, curly: 50}

_.object([['moe', 30], ['larry', 40], ['curly', 50]]);
// => {moe: 30, larry: 40, curly: 50}

_.range(10);
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

_.range(1, 11);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

_.range(0, 30, 5);
// => [0, 5, 10, 15, 20, 25]

_.range(0, -10, -1);
// => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
