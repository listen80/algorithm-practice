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
        // for (let i = 0, j = col - row; i < n && j < n; i++, j++) {
        //     if (board[i][j] === 'Q') {
        //         return false;
        //     }
        // }
        // for (let i = 0, j = col + row; i < n && j >= 0; i++, j--) {
        //     if (board[i][j] === 'Q') {
        //         return false;
        //     }
        // }
        return true
    }
    function log(board) {
        const cloned = board.map((item) => item.slice());
        console.log(cloned)
        return cloned
    }

    const results = []

    function deep(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.') {
                    if (isValid(board, i, j)) {
                        board[i][j] = 'Q';
                        deep(board);
                        board[i][j] = '.';
                    } else {
                        console.log(i, j)
                    }
                }
            }
        }
        results.push(log(board))

    }
    const resolve = deep(createBoard(n))
    console.log(resolve)
    return resolve
};

solveNQueens(8)