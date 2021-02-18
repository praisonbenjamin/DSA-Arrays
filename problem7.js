// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

function maxSum(arr) {
  let initMax = 0;
  let maxEnd = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEnd += arr[i];

    if (initMax < maxEnd){
      initMax = maxEnd;
    }
    if(maxEnd < 0) {
      maxEnd = 0;
    }

  }

  return initMax;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));