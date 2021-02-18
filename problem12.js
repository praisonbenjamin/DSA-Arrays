/* Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
Input: amazon, azonma
Output: False
Input: amazon, azonam
Output: true */


function checkRotationStrings(string, rotated) {
    return string.length === rotated.length && rotated.repeat(2).includes(string);
}

console.log(checkRotationStrings('amazon', 'azonma')) //false
console.log(checkRotationStrings('amazon', 'azonam')) //true