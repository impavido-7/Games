function checkSquare(a, row, col, bombSymbol) {
    let size = a.length;
    let arr;
    a[row][col].visible = true;
    var x = [row - 1, row, row + 1];
    var y = [col - 1, col, col + 1];
    for (let i = 0; i < x.length; i++) {
        if (x[i] >= 0 && x[i] < size) {
            for (let j = 0; j < y.length; j++) {
                if (y[j] >= 0 && y[j] < size) {
                    arr = click(a, x[i], y[j], bombSymbol);
                }
            }
        }
    }
    return arr;
}


export default function click(a, row, col, bombSymbol) {

    if (a[row][col].visible === true) {
        return a;
    }
    else if (a[row][col].value >= 1) {
        a[row][col].visible = true;
        return a;
    }
    else if (a[row][col].value === bombSymbol) {
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a.length; j++) {
                if (a[i][j].value === bombSymbol) {
                    a[i][j].visible = true;
                }
            }
        }
        return a;
    }
    else {
        return checkSquare(a, row, col);
    }
}