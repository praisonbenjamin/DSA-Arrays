// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

// loop through array
// if num is smaller than 5, store index in error array
// loop through error array
// on each loop, remove that index value from original array
// return cleaned array

function filterArray(input) {

  for (let i = 0; i < input.length; i ++) {
    if (input[i] < 5) {
      input.splice(i, 1);
      i--;
    }
  }
  return input;
}

console.log(filterArray([0, 1, 5])); // [5]
console.log(filterArray([5])); // [5];
console.log(filterArray([0, 1, 4])); // []
console.log(filterArray([])); // []
console.log(filterArray([5, 5, 5])); // [5, 5, 5]
console.log(filterArray([0, -1, 5])); // [5]
console.log(filterArray([0, 5, 3, 7, 10])); // [5, 7, 10]