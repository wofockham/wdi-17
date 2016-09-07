/*
The Pluralizer

Write a function named pluralize that:

takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

var pluralize = function (noun, number) {
  var count = number + ' ' + noun;

  if (number === 1) {
    return count;
  } else {
    return count + 's';
  }

  // return number + ' ' + noun + ( number === 1 ? '' : 's' );
};

console.log( pluralize('kitten', 0) );
console.log( pluralize('kitten', 1) );
console.log( pluralize('kitten', 17) );
