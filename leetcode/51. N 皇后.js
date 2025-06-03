/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    function createBoard(n) {
        return new Array(n).fill(null).map(() => new Array(n).fill('.'));
    }

    function isValid(board, row, col) {
        const n = board.length;
        // 检查列是否有皇后互相冲突
        for (let i = 0; i < n; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        // 检查行是否有皇后互相冲突
        for (let j = 0; j < n; j++) {
            if (board[row][j] === 'Q') {
                return false;
            }
        }
        console.log('iiiii')
        for (let i = 0, j = col - row; i < n, j < n; i++, j++) {
            console.log(i, j)
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        for (let i = 0, j = col + row; i < n, j > 0; i++, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        return true
    }

    function deep(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.') {
                    for (let k = 0; k < board.length; k++) {
                        if (isValid(board, i, k)) {
                            board[i][k] = 'Q';
                            const result = deep(board);
                            if (result) {
                                return result;
                            }
                            board[i][k] = '.';
                        }
                    }
                }
            }
        }
    }
    const resolve = deep(createBoard(8))
    console.log(resolve)
    return resolve
};

solveNQueens(4)