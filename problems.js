const Array = require('./array');

function main() {

  Array.SIZE_RATIO = 3;

  // create and instance of array class
  let arr = new Array();

  // add an item to the array
  arr.push(3);
  // {length:1, capacity:3 memory address: 0}

  console.log(arr);
  
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  //   {length: 6, capacity: 12, memory adress: 3}

  arr.pop();
  arr.pop();
  arr.pop();
  //{length: 3, capacity: 12, memory address: 3}
  // capacity doesn't change as the pop allows for the spaces to be rused
    
  const index1 = arr.get(0);
  
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.remove(i);
  }
  console.log(arr);
  arr.push('tauhida');
  console.log(arr);
  console.log(arr.get(0));

}

// length is 1, capacity is 3, memory address is 0 for first log, second log length becomes 6, capacity becomes 12, ptr moves to 3, length of old array

// QUESTION 3

// length becomes 3 after removing 3 values from the original 6 values. capacity remains 12 and memory address remains 3.

// QUESTION 4

// The item returns NaN because the memory array is a Float64Array
// _resize is used to allocate additional size in memory for the array