const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

const result = [
    ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
    ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
    ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
    ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
    ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
    ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
    ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
    ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
]

const board2 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "."],
    ["4", ".", ".", "8", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", ".", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", ".", "9"]
]

const board3 = [
    ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
    ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
    ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
    ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
    ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
    ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
    ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
    ["3", "4", "5", "2", "8", "6", ".", ".", "."]
]

const equals = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] !== b[i][j]) return false;
        }
    }
    return true;
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

};

function isValid(board, row, col, num) {
    for (let i = 0; i < board.length; i++) {
        // 检查行是否有重复数字
        if (board[row][i] === num) {
            return false;
        }
        // 检查列是否有重复数字
        if (board[i][col] === num) {
            return false;
        }
    }
    // 检查 3x3 子网格是否有重复数字

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    const endRow = startRow + 3;
    const endCol = startCol + 3;
    for (let x = startRow; x < endRow; x++) {
        for (let y = startCol; y < endCol; y++) {
            if (board[x][y] === num) {
                return false;
            }
        }
    }
    return true;
}

const results = []
function deep(i, j, board) {
    const emptySpace = '.'
    if (results.length === 100) {
        return false;
    }
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            if (board[i][j] === emptySpace) {
                for (let k = 1; k < 10; k++) {
                    const s = String(k)
                    if (isValid(board, i, j, s)) {
                        board[i][j] = s;
                        deep(i, j, board);
                        board[i][j] = emptySpace;
                    }
                }
                return false
            }
        }
    }
    results.push(log(board))
    return true;
}

function log(board) {
    const cloned = board.map((item) => item.slice());
    console.log(cloned)
    return cloned
}

deep(0, 0, board)

console.log(results.length, board, equals(results[0], result))