function isSafe(board, row, col, num) {

    // Checking row
    for (let d = 0; d < board.length; d++) {
        if (board[row][d] == num) {
            return false;
        }
    }

    // Checking column
    for (let r = 0; r < board.length; r++) {
        if (board[r][col] == num) {
            return false;
        }
    }

    // Checking in a box
    let sqrt = Math.floor(Math.sqrt(board.length));
    let boxRowStart = row - row % sqrt;
    let boxColStart = col - col % sqrt;

    for (let r = boxRowStart; r < boxRowStart + sqrt; r++) {
        for (let d = boxColStart; d < boxColStart + sqrt; d++) {
            if (board[r][d] == num) {
                return false;
            }
        }
    }

    // If there is no clash, it's safe
    return true;
}

function solveSudoku(board, n) {
    let row = -1;
    let col = -1;
    let isEmpty = true;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 0) {
                row = i;
                col = j;
                // We still have some remaining missing values in Sudoku
                isEmpty = false;
                break;
            }
        }
        if (!isEmpty) {
            break;
        }
    }

    // No empty space left
    if (isEmpty) {
        return true;
    }

    // Else for each-row backtrack
    for (let num = 1; num <= n; num++) {
        if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board, n)) {
                return true;
            }
            else {
                board[row][col] = 0;
            }
        }
    }
    return false;
}


export default function generateArray(size) {
    let a = [];
    for (let i = 0; i < size; i++) {
        a[i] = [];
        for (let j = 0; j < size; j++) {
            a[i].push(0);
        }
    }
    let i = 1;
    while (i <= size) {
        let row = Math.floor(Math.random() * size);
        let col = Math.floor(Math.random() * size);
        if (a[row][col] === 0) {
            a[row][col] = i;
            i++;
        }
    }
    if (solveSudoku(a, size)) {
        return a;
    }
}