const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // console.log(matrix)
  function getCell(row, col) {
    if (row < 0 || col < 0) { //не ушли ли мы за пределы массива
      return 0;
    } else if (row >= matrix.length) { // проверяем не ушли ли за пределы вправо
      return 0;
    } else if (col >= matrix[row].length) { // не ушли ли за пределы вниз
      return 0;
    } else if (matrix[row][col] === true) { // проверяем есть ли бомба
      return 1;
    } else {
      return 0;
    }
  }

  const matrix2 = [];

  for (let row = 0; row < matrix.length; row++) {
    matrix2.push([]);
    for (let col = 0; col < matrix[row].length; col++) {
      let bombs = 0;

      bombs += getCell(row - 1, col - 1)  // выше и левее
      bombs += getCell(row - 1, col)      // выше  и  на этой же колонке
      bombs += getCell(row - 1, col + 1)  //  выше и правее

      bombs += getCell(row, col - 1)    // левее
      bombs += getCell(row, col + 1)    //правее

      bombs += getCell(row + 1, col - 1) // ниже и левее
      bombs += getCell(row + 1, col)     // ниже на этой же колонке
      bombs += getCell(row + 1, col + 1) // ниже и правее

      matrix2[row].push(bombs);
    }
  }
  return matrix2;
}

module.exports = {
  minesweeper
};
