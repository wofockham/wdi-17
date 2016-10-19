var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// Iterate through numbers and log each number to the console
_(numbers).each(function (n) {
  console.log(n);
});

// Iterate through numbers and multiply each one of them by 5
var fiveTimes = _(numbers).map(function (n) { return n * 5; });
console.log(fiveTimes);

// Iterate through numbers and reduce it by adding them together
var sum = _(numbers).reduce(function (accumulator, n) { // Accumlator == running total
  return accumulator + n;
});
console.log(sum);

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Get an array of all of the people in people that have the username "E"
var ePeople = _(people).where({username: 'E'});
console.log(ePeople);

// Find the first object in people that has the id of 3
var person3 = _(people).findWhere({id: 3});
console.log(person3);

// Find the first person who has an age of less than 50
var youngPerson = _(people).filter(function (person) {
  return person.age < 50;
})[0];
console.log(youngPerson);

// Get an array of all of the people with an age of over 60
var seniorCitizens = _(people).filter(function (person) {
  return person.age > 60;
});
console.log(seniorCitizens);

// Remove all of the people with an age less than 40
var postMidLifeCrisis = _(people).reject(function (person) {
  return person.age < 40;
});
console.log(postMidLifeCrisis);
