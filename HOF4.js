/* function each(coll, f) {
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

function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
} */

function sum(numbers) {
  return reduce(numbers, function(total, number) {
    return total + number;
  }, 0);
}

function product(numbers) {
  return reduce(numbers, function(total, number) {
    return total * number;
  }, 1);
}

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function averageAge(people) {
  var sum = reduce(people, function(total, person){
    return total + person.age;
  }, 0);
  return sum / people.length;
}

/* function range(start, end) {
  var acc = [];
  for (var i = start; i < end; i++) {
    acc.push(i);
  }
  return acc;
}

function factorial(n) {
  return reduce(range(1,n+1), function (acc, curr) {
    return acc * curr;
  },1);
} */

/* function sumBy(numbers, f) {
  var sum = 0;
  each(numbers, function(number) {
    sum = sum + f(number);
  });
  return sum;
} */

function sumBy(numbers, f) {
  return reduce(numbers, (acc, curr) => acc + f(curr), 0);
}

/* function max(numbers) {
  var max = numbers[0];
  each(numbers, function(number) {
    if (number > max) {
      max = number;
    }
  });
  return max;
} */

/* function max(numbers) {
  return reduce(numbers, (acc, curr) => curr > acc ? curr : acc , numbers[0]);
} */

/* function countOccurrences(str, char) {
  var matches = str.match(RegExp(char,'g'));
  return matches ? matches.length : 0;
} */

function countOccurrences(str, char) {
  var chars = str.split('');
  return reduce(chars, (acc, curr) => curr === char ? acc + 1 : acc, 0); 
}

function everyNumberOdd(array) {
  return reduce(array, (acc, curr) => acc === true && curr % 2 === 1? true : false, true);
}

function everyNumberPositive(array) {
  return reduce(array, (acc, curr) => acc === true && curr > 0 ? true : false, true);
}

function stringLengthGreater3(strings) {
  return reduce(strings, (acc, curr) => acc === true && curr.length > 3 ? true : false, true);
}

function every(array, predicate) {
  return reduce(array, (acc, curr) => acc === true && predicate(curr) ? true : false, true);
}

function everyNumberEven(numbers) {
  return every(numbers, function(number) {
    return number % 2 === 0;
  });
}

/* Description on how the join function works with the seperator defined
["the", "quick", "brown", "fox"].join(" "); // => "the quick brown fox"
["one", "two", "three"].join(":"); // => "one:two:three" */

function joinWith(onto, next, separator) {
  return onto + separator + next;
}

/* console.log(joinWith("the quick", "brown", " ")); // => "the quick brown"
console.log(joinWith("one:two", "three", ":")); // => "one:two:three" */

function join(array, separator) {
  return reduce(array, (acc, curr) => joinWith(acc, curr, separator), array.shift());
}

/* console.log(join(["the", "quick", "brown", "fox"], " ")); // => "the quick brown fox"
console.log(join(["one", "two", "three"], ":")); // => "one:two:three" */

/* function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  return acc;
} */

function map(array, f) {
  return reduce(array, (acc, curr) => acc.concat(f(curr)), []);
}

/* function countWords(s) {
  var acc = {};
  var words = s.split(" ");
  for (var i = 0; i < words.length; i = i + 1) {
    var word = words[i];
    if (acc[word] === undefined) {
      acc[word] = 1;
    } else {
      acc[word]++;
    }
  }
  return acc;
} */

function countWords(s) {
  return reduce(s.split(' '), function (acc, curr) {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

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

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

/* function range(start, end) {
  var acc = [];
  for (var i = start; i < end; i++) {
    acc.push(i);
  }
  return acc;
} */

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return reduce(range(1,n+1), function (acc, curr) {
    return acc * curr;
  });
}

function max(numbers) {
  return reduce(numbers, (acc, curr) => curr > acc ? curr : acc);
}

function range(start, end) {
  var acc = [];
  if (end) {
    for (var i = start; i < end; i++) {
      acc.push(i);
    }
    return acc;
  }
  for (var i = 0; i <= start; i++) {
    acc.push(i);
  }
  return acc;
}

/* function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
} */

function reduce(coll, f, acc) {
  if (Array.isArray(coll)){
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  if (acc === undefined) {
    acc = Object.keys(coll)[0];
    delete coll[acc];
  }
  for (var key in coll){
    acc = f(coll[key], key);
  }
  return acc;
}