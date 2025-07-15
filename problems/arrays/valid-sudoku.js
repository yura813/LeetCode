// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

var isValidSudoku = function (board) {
  const rows = new Map();
  const cols = new Map();
  const boxes = new Map();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;

      const boxKey = `${Math.floor(i / 3)}, ${Math.floor(j / 3)}`;

      if (
        (rows.get(i) && rows.get(i).has(board[i][j])) ||
        (cols.get(j) && cols.get(j).has(board[i][j])) ||
        (boxes.get(boxKey) && boxes.get(boxKey).has(board[i][j]))
      ) {
        return false;
      }

      rows.set(i, rows.get(i) ?? new Set());
      cols.set(j, cols.get(j) ?? new Set());
      boxes.set(boxKey, boxes.get(boxKey) ?? new Set());

      rows.get(i).add(board[i][j]);
      cols.get(j).add(board[i][j]);
      boxes.get(boxKey).add(board[i][j]);
    }
  }
  return true;
};
