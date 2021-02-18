// QUESTION 5 Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// loop through each char

// if char is a space, grab index

// replace that index in original char with %20

function urlString(input) {
  if(!input.includes(' ')){
    return input;
  }

  let inputArray = input.split('');
  for (let i = 0; i < inputArray.length; i++){
    if (inputArray[i] === ' '){
      inputArray[i] = '%20';
    }
  }

  inputArray = inputArray.join('');

  return inputArray;

}

console.log(urlString('www.thinkful.com /tauh ida parv een'));

//complexity of solution is O(n), cannot be optimized down to O(1) because will always need to search the entire string


/* alt solution

let testString = 'www.thinkful.com /tauh ida parv een';

function fixString(string) {
  let strArray = string.split('');
  let errors = [];
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === ' ') {
      errors.push(i);
    }
  }

  errors.forEach((index) => {
    strArray[index] = '%20';
  });

  let newStr = strArray.join('');

  return newStr;
}

console.log(fixString(testString));

*/
