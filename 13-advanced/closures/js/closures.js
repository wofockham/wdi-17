// var name;
// $(document).ready(function () {
//   var username = 'craigsy';
//   name = function () {
//     return username;
//   }
// });

console.log(name());

var tagMaker = function (tag) {
  var savedTag = tag; // Store the tag in a closure.
  return function (content) { // `savedTag` will still be available via the closure
    return '<' + savedTag + '>' + content + '</' + savedTag + '>';
  }
};

var p = tagMaker('p');
var h1 = tagMaker('h1');
var h2 = tagMaker('h2');
var span = tagMaker('span');
var div = tagMaker('div');

////////////////////////////////////////////////////////////////////////////////

var idGenerator = function () {
  var count = 0; // This will be stored in a closure.
  return function () {
    count++; // This inner function can still access count via the closure.
    return count;
  };
}

var id = idGenerator();

// A bunch of other crappy code
// var count = 'disabled'; // Don't show line numbers on the screen.
