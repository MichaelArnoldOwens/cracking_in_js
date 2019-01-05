const checkRows = function (grid) {
  for (let row = 0; row < grid.length; row++) {
    let nums = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    for (let col = 0; col < grid[0].length; col++) {
      const currNum = grid[row][col]
      if (nums.has(currNum)) {
        nums.delete(currNum);
      } else {
        return false;
      }
    }
  }
  return true;
}

const checkCols = function (grid) {
  for (let row = 0; row < grid.length; row++) {
    let nums = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    for (let col = 0; col < grid[0].length; col++) {
      const currNum = grid[col][row];
      if (nums.has(currNum)) {
        nums.delete(currNum);
      } else {
        return false;
      }
    }
  }
  return true;
}

const checkSubGrids = function (grid) {
  // checking all the 9 3x3 grids
  return checkSubGrid(0, 0, 3, 3, grid) &&
    checkSubGrid(0, 3, 3, 6, grid) &&
    checkSubGrid(0, 6, 3, 9, grid) &&
    checkSubGrid(3, 0, 6, 3, grid) &&
    checkSubGrid(3, 3, 6, 6, grid) &&
    checkSubGrid(3, 6, 6, 9, grid) &&
    checkSubGrid(6, 0, 9, 3, grid) &&
    checkSubGrid(6, 3, 9, 6, grid) &&
    checkSubGrid(6, 6, 9, 9, grid);
}

const checkSubGrid = function (rowStart, colStart, rowEnd, colEnd, grid) {
  let nums = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
  for (let row = rowStart; row < rowEnd; row++) {
    for (let col = colStart; col < colEnd; col++) {
      const currNum = grid[row][col];
      if (nums.has(currNum)) {
        nums.delete(currNum);
      } else {
        return false;
      }
    }
  }
  return true;
}

const isValidSolution = function (grid = '') {
  const isOnlyNumStr = /^\d+$/.test(grid);
  if (grid.length !== 81 || !isOnlyNumStr) return false;

  let gridArr = [[], [], [], [], [], [], [], [], []];
  let gridCounter = 0;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      gridArr[row][col] = grid[gridCounter];
      gridCounter++;
    }
  }

  return checkRows(gridArr) && checkCols(gridArr) && checkSubGrids(gridArr);
}

console.log(`test empty: ${isValidSolution('')}`);
console.log(`test no arg: ${isValidSolution()}`);
console.log(`test valid length and invalid charset: ${isValidSolution("8354169272968574314172936585691347821236785497485291636527aaaa4981345276374962815")}`)
console.log(`test valid: ${isValidSolution("835416927296857431417293658569134782123678549748529163652781394981345276374962815")}`);
