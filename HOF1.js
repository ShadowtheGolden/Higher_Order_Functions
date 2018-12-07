// function declaration
/* function square(x) {
  return x * x;
} */

// function expression
var square = function(x) {
  return x * x;
};

// 1.
var cube = function(x) {
  return x * x * x;
}
// 2.
var fullname = function(first, last) {
  return first + " " + last;
}
// 3.
var power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}
// 4.
var sumCubes = function(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function sumSquares(numbers) {
  var total = 0;
  each(numbers, number => total += square(number));
  return total;
}

function sumCubes(numbers) {
  var total = 0;
  each(numbers, number => total += cube(number));
  return total;
}

/* function product(numbers) {
  var total = 1;
  for (var i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
} */

function product(numbers) {
  var total = 1;
  each(numbers, number => total *= number);
  return total;
}

/* function cubeAll(numbers) {
  var arr = [];
  for (var i = 0; i < numbers.length; i++) {
    arr.push(Math.pow(numbers[i], 3));
  }
  return arr;
} */

function cubeAll(numbers) {
  var arr = [];
  each(numbers, number => arr.push(Math.pow(number, 3)));
  return arr;
}

/* function odds(numbers) {
  var arr = [];
  each(numbers, number => number % 2 === 1 ? arr.push(number) : null);
  return arr;
} */

function sumByAllElementsMultipliedByFour(numbers) {
  var total = 0;
  each(numbers, number => total += number * 4);
  return total;
}

function sumBy(numbers, f) {
  var total = 0;
  each(numbers, number => total += f(number));
  return total;
}

/* var numbers = [1, 2, 3, 4];

console.log(sumBy(numbers, square)); // => 30
  //Note: you will have to create a function "square" that returns the square of an input number.
console.log(sumBy(numbers, cube)); // => 100
  //Note: you will have to create a function "cube" that returns the cube of an input number.
console.log(sumBy(numbers, function(number) {
  return number * 4;
}));
// => 40

console.log(sumBy(numbers, number => number)); */

function productBy(numbers, f) {
  var total = 1;
  each(numbers, number => total *= f(number));
  return total;
}

function doubleAll(numbers) {
  var arr = [];
  each(numbers, number => arr.push(number * 2));
  return arr;
}

function halveAll(numbers) {
  var arr = [];
  each(numbers, number => arr.push(number / 2));
  return arr;
}

function uppercaseAll(strings) {
  var arr = [];
  each(strings, string => arr.push(string.toUpperCase()));
  return arr;
}

function map(array, f) {
  var arr = [];
  each(array, element => arr.push(f(element)));
  return arr;
}

/* console.log(map([1, 2, 3, 4], function(x) {
  return x * 2;
}));
// => [2, 4, 6, 8] */

/* console.log(map(["hello", "world"], string => string.toUpperCase())); // => ["HELLO", "WORLD"]
console.log(map(["HelLo", "WorLD"], string => string.toLowerCase())); // => ["hello", "world"]
console.log(map(["the", "quick", "brown", "fox", "jumped"], string => string.length)); // => [3, 5, 5, 3, 6]
var people = [
  {name: "Alyssa P. Hacker", age: 26},
  {name: "Ben Bitdiddle", age: 34},
  {name: "Eva Lu Ator", age: 19},
  {name: "Lem E. Tweakit", age: 40}
];
console.log(map(people, person => person.name)); // => ["Alyssa P. Hacker", "Ben Bitdiddle", "Eva Lu Ator", "Lem E. Tweakit"]
console.log(map(people, person => person.name + ' is ' + person.age));
// => ["Alyssa P. Hacker is 26", "Ben Bitdiddle is 34", "Eva Lu Ator is 19", "Lem E. Tweakit is 40"] */

function evens(numbers) {
  var arr = [];
  each(numbers, number => number % 2 === 0 ? arr.push(number) : null);
  return arr;
}

function multiplesOfThree(numbers) {
  var arr = [];
  each(numbers, number => number % 3 === 0 ? arr.push(number) : null);
  return arr;
}

/* function evenLength(strings) {
  var arr = [];
  each(strings, string => string.length % 2 === 0 ? arr.push(string) : null);
  return arr;
} */

function filter(array, f) {
  var arr = [];
  each(array, element => f(element) ? arr.push(element) : null);
  return arr;
}

/* console.log(filter([1, 2, 3, 4], function(x) {
  return x % 2 === 0; // x is even?
})); // => [2, 4] */

function odds(numbers) {
  return filter(numbers, number => number % 2 === 1);
}

function positives(numbers) {
  return filter(numbers, number => number > 0);
}

function negatives(numbers) {
  return filter(numbers, number => number < 0);
}

function evenLength(strings) {
  return filter(strings, string => string.length % 2 === 0);
}

function largerThanSix(numbers) {
  return filter(numbers, number => number > 6);
}

function startsWithChar(strings, character) {
  return filter(strings, string => string[0] === character);
}

var words = "the quick brown fox jumps over the lazy dog".split(" ");

console.log(startsWithChar(words, "q")); // => ["quick"]
console.log(startsWithChar(words, "t")); // => ["the", "the"]