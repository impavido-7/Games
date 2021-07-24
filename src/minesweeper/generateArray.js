function frameArray(a, size, row, col) {
    var x = [row - 1, row, row + 1];
    var y = [col - 1, col, col + 1];
    for (let i = 0; i < x.length; i++) {
        if (x[i] >= 0 && x[i] < size) {
            for (let j = 0; j < y.length; j++) {
                if (y[j] >= 0 && y[j] < size) {
                    if (!isNaN(a[x[i]][y[j]].value)) {
                        a[x[i]][y[j]].value++;
                    }
                }
            }
        }
    }
}

export default function generateArray(a, bombSymbol) {
    let size = a.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (a[i][j].value == bombSymbol) {
                frameArray(a, size, i, j);
            }
        }
    }
    return a;
}