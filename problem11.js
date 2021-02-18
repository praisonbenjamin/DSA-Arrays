// Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.


const setZeroes = function(matrix) {
  if(matrix.length === 0)
    return;

  let pivotRow = -1;
  let pivotCol = -1;
  let iterRow = 0;
  let iterCol = 0;
  let found = false;

  // Find a pivot
  while(!found && iterRow < matrix.length) {
    iterCol = 0;
    while(!found && iterCol < matrix[0].length) {
      if(matrix[iterRow][iterCol] === 0) {
        found = true;
        pivotRow = iterRow;
        pivotCol = iterCol;
      }
      iterCol++;
    }
    iterRow++;
  }

  if (!found)
    return;

  // Update the Column value
  for(let i = 0; i < matrix.length; i++) {
    if(i == pivotRow)
      continue;
    for(let j = 0; j < matrix[0].length; j++) {
      if(j == pivotCol)
        continue;
      if(matrix[i][j] === 0) {
        matrix[i][pivotCol] = 0;
        matrix[pivotRow][j] = 0;
      }
    }
  }

  for(let i = 0; i < matrix.length; i++)
    if(matrix[i][pivotCol] === 0 && i !== pivotRow)
      fillRow(matrix, i);

  for(let i = 0; i < matrix[0].length; i++)
    if(matrix[pivotRow][i] === 0 && i !== pivotCol)
      fillCol(matrix, i);

  fillCol(matrix, pivotCol);
  fillRow(matrix, pivotRow);

  return matrix;
};

let fillRow = function(matrix, row) {
  for(let i = 0; i < matrix[0].length; i++)
    matrix[row][i] = 0;
};

let fillCol = function(matrix, col) {
  for(let i = 0; i < matrix.length; i++)
    matrix[i][col] = 0;
};

console.log(setZeroes([[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]));