/* function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function indexedExponentials(numbers) {
  var arr = [];
  each(numbers, (number, ind) => arr.push(Math.pow(number,ind)));
  return arr;
}

console.log(indexedExponentials([2, 5, 7, 4])); // => [2^0, 5^1, 7^2, 4^3] => [1, 5, 49, 64]

function evenIndexedOddNumbers(numbers) {
  var arr = [];
  each(numbers, (number, ind) => (ind % 2 === 0 && number % 2 === 1) ? arr.push(number) : null);
  return arr;
}

console.log(evenIndexedOddNumbers([1, 3, 3, 4, 7, 10])); // => [1, 3, 7]

function evenIndexedEvenLengths(strings) {
  var arr = [];
  each(strings, (string, ind) => (ind % 2 === 0 && string.length % 2 ===0) ? arr.push(string) : null);
  return arr;
}

console.log(evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"])); // => ["lion", "doge"]
console.log(evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"])); // => ["purple", "yellow"]

function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

function values(obj) {
  var arr = [];
  each(obj, value => arr.push(value));
  return arr;
}

function keys(obj) {
  var arr = [];
  each(obj, (value, key) => arr.push(key));
  return arr;
}

function keysLongerThan(obj, number) {
  var newObj = {};
  each(obj, (value, key) => key.length > number ? newObj[key] = value : null);
  return newObj;
}

console.log(keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3));
// => {name: "Annyeong", favoriteColor: "blue"}
console.log(keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 4));
// => {favoriteColor: "blue"}

function incrementValues(obj) {
  var newObj = {};
  each(obj, (value, key) => typeof value === 'number' ? newObj[key] = value + 1 : newObj[key] = value);
  return newObj;
}

console.log({name: "Annyeong", age: 25, favoriteColor: "blue", year: 1986});
console.log(incrementValues({name: "Annyeong", age: 25, favoriteColor: "blue", year: 1986})); */

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(coll, predicate) {
  if (Array.isArray(coll)) {
    var acc = [];
    each(coll, function(element, ind) {
      if (predicate(element, ind)) {
      acc.push(element);
      }
    });
  return acc;
  } else {
    var acc = {};
    each(coll, function(value, key) {
      if (predicate(value, key)) {
        acc[key] = value;        
      }
    });
    return acc;
  }
}

/* function evens(numbers) {
  return filter(numbers, number => number % 2 === 0);
}

function multiplesOfThree(numbers) {
  return filter(numbers, number => number % 3 === 0);
}

function positives(numbers) {
  return filter(numbers, number => number > 0);
}

function evenLength(strings) {
  return filter(strings, string => string.length % 2 === 0);
}

function odds(numbers) {
  return filter(numbers, number => number % 2 === 1);
}

function negatives(numbers) {
  return filter(numbers, number => number < 0);
}

function largerThanSix(numbers) {
  return filter(numbers, number => number > 6);
}

function startsWithChar(strings, character) {
  return filter(strings, string => string[0] === character);
}

var words = "the quick brown fox jumps over the lazy dog".split(" ");
console.log(startsWithChar(words, "q")); // => ["quick"]
console.log(startsWithChar(words, "t")); // => ["the", "the"] */

function evenIndexedEvenLengths(strings) {
  return filter(strings, (string, ind) => (ind % 2 === 0 && string.length % 2 ===0));
}

console.log(evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"])); // => ["lion", "doge"]
console.log(evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"])); // => ["purple", "yellow"]

function onlyNumeric(obj) {
  return filter(obj, value => typeof value === 'number');
}

console.log(onlyNumeric({a: 1, b: "dog", c: true})); // => {a: 1}