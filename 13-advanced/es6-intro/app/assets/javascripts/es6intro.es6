////////////////////////////////////////////////////////////////////////////////
// let, const and var let you declare variables with different scope visibility:
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//console.log('and then finally i is: ', i); // i will be undefined

const DAYS_PER_FORTNIGHT = 14;
// DAYS_PER_FORTNIGHT = 5.6; // This will throw a compile time error on the server.

////////////////////////////////////////////////////////////////////////////////
// default parameters:
let sayHello = function (name="World") {
   console.log( "Hello " + name );
 };

sayHello(); // => "Hello World"

sayHello("person"); // => "Hello person"

////////////////////////////////////////////////////////////////////////////////
// interpolation at last!
let name = "Jonesy";
let greeting = `Hello ${name}!!!`;
console.log(greeting);

////////////////////////////////////////////////////////////////////////////////
// "fat" arrows let you write short one line functions (with implicit return)
let randomNum = () => Math.random();
console.log( randomNum() );

let sum = (a, b) => a + b;

// jQuery handlers will look something like this:
$("body").on('click', (e) => {
   console.log("Hello")
});

////////////////////////////////////////////////////////////////////////////////
// Spread operator lets us turn arrays into separate arguments
// (and vice versa)
let putInAlphabeticalOrder = function (...letters) {
 return letters.sort();
};

console.log( putInAlphabeticalOrder("b", "z", "l") );

////////////////////////////////////////////////////////////////////////////////
// Destructuring lets us do parallel assignment
let [firstNum, secondNum] = [1, 2];
// And pluck values from objects
let {firstName, address} = { firstName: "Hello", address: 'Sydney', spam: false };
