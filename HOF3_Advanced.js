function map2(arr1, arr2, func) {
  return map(arr1, arr2, func);
}

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(...array[i]);
  }
}

/* function each(arr1, arr2, f) {
  for (var i = 0; i < arr1.length; i++) {
    f(arr1[i],arr2[i]);
  }
} */

function map(array, func) {
  var acc = [];
  each(...array, function() {
    acc.push(func());
  });
  return acc;
}

/* function map(arr1, arr2, f) {
  var acc = [];
  each(arr1, arr2, function(element1, element2) {
    acc.push(f(element1, element2));
  });
  return acc;
} */

/* console.log(map2([1, 2, 3], [4, 5, 6], function(a, b) {
  return a * b;
}));
// => [4, 10, 18] */

function mapN(...arrays) {
  var argArr;
  var afterFuncArr = [];
  var func = arrays.pop();
  for (var i = 0; i < arrays[0].length; i++) {
    argArr = [];
    for (var j = 0; j < arrays.length; j++) {
      argArr.push(arrays[j][i]);
    }
    afterFuncArr.push(func(...argArr));
  }
  return afterFuncArr;
}

console.log(mapN([1, 2, 3], [4, 5, 6], [2, 2, 2], function(a, b, c) {
  return (a * b) + c;
}));
// => [6, 12, 20]

console.log(mapN([1, 2, 3], function(x) { return x * x; })); // => [1, 4, 9]