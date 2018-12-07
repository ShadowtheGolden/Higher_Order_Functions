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

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  return acc;
}

/* var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function ages(people) {
  return map(people, person => person.age);
} */

function firstNames(people) {
  return map(people, person => person.name.first)
}

function lastNames(people) {
  return map(people, person => person.name.last);
}

function fullNames(people) {
  return map(people, person => person.name.middle === undefined ? person.name.first + ' ' + person.name.last : person.name.first + ' ' + person.name.middle + ' ' + person.name.last);
}

function abs(x) {
  if (x >= 0) {
    return x;
  }
  return -x;
}

//console.log(map([1, -2, 37, -100, -8, 5], abs));
// => [1, 2, 37, 100, 8, 5]

function max(numbers) {
  var max = numbers[0];
  each(numbers, number => number > max ? max = number : null);
  return max;
}

//console.log(max([1, 3, 2])); // => 3
//console.log(max([4, 23, 100])); // => 100

function maximums(arrays) {
  return map(arrays, max);
}

// our argument would look like this:
var sampleInput = [ // it's an array
  [1, 3, 2], // of arrays of numbers
  [4, 23, 100],
  [7, 6, 3, -2]
];

// and we want to be able to use maximums to do this:
//console.log(maximums(sampleInput)); // => [3, 100, 7]

function exponentials(numbers) {
  return map(numbers, number => Math.pow(number,number));
}

//console.log(exponentials([1, 2, 3, 4])); // => [1, 2*2, 3*3*3, 4*4*4*4] => [1, 4, 27, 256]
//console.log(exponentials([3, 2, 5])); // => [27, 4, 3125]

function reverse(str) {
  var reversedStr = "";
  for (var i = str.length-1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
} 

function reverseWords(string) {
  return map(string.split(' '), reverse).join(' ');
}

// console.log(reverseWords("hello world")); // => "olleh dlrow"

/* var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function ages(people) {
  return map(people, function(person) {
    return person.age;
  });
}

console.log(pluck(people, "age")); // => [26, 34, 40, 45, 21]

function pluck(people, key) {
  return map(people, person => person[key]);
} */

var input = "Alyssa,P.,Hacker,26\nBen,,Bitdiddle,34\nEva,Lu,Ator,40\nLem,E.,Tweakit,45\nLouis,,Reasoner,21";

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function parseCSV(string) {
  var peopleArr = string.split('\n');
  return map(peopleArr, function(person) {
    var personArr = person.split(',');
    if (personArr[1] === ''){
      return {name: {first: personArr[0], last: personArr[2]}, age: Number(personArr[3])};
    }
    return {name: {first: personArr[0], middle: personArr[1], last: personArr[2]}, age: Number(personArr[3])};

  });
}