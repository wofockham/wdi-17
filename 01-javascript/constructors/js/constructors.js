// FACTORIES ///////////////////////////////////////////////////////////////////
var catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    meow: function () {
      console.log('meowww, my name is ' + this.name);
    },
    eat: function (food) {
      console.log('yum I love to eat ' + food);
    }
  };
};

var cuteCats = [

		// { name: "Angel", age: 18, furColor: "grey" },
		// { name: "Evil", age: 14, furColor: "red" },
		// { name: "Meh", age: 12, furColor: "white" }

    catFactory('Angel', 18, 'grey'),
    catFactory('Evil', 14, 'red'),
    catFactory('Meh', 12, 'white')

];


var garfield = catFactory('Garfield', 40, 'orange');





// this ////////////////////////////////////////////////////////////////////////
var lizzieTheCat = {
  name: 'Lizzie Windsor',
  age: 18,
  furColor: 'grey',
  meow: function() {
    console.log('meowww, my name is ' + this.name);
  },
  eat: function(food) {
    console.log('Yum, I love ' + food);
  },
  sleep: function(numMinutes) {
    for (var i = 0; i < numMinutes; i++) {
      console.log('z');
    }
  }
};









// constructors ////////////////////////////////////////////////////////////////
var Cat = function (name, age, furColor) {
  // Here `this` will be created for you, when you call `new Cat()`
  this.name = name;
  this.age = age;
  this.furColor = furColor;
  this.meow = function () {
    console.log('meowww, my name is ' + this.name);
  }
};

Cat.prototype.eat = function (food) {
  console.log('yum, I love to eat ' + food);
};

var hamlet = new Cat('Hamlet', 17, 'black');
