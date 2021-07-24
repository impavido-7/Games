export default function left(arr) {
    let i, j, col;
    for (i = 0; i < arr.length; i++) {
        col = 0;
        for (j = 0; j < arr.length; j++) {
            if (arr[i][j] != 0) {
                arr[i][col] = arr[i][j];
                col++;
            }
        }
        for (j = col; j < arr.length; j++) {
            arr[i][j] = 0;
        }
    }
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[i][j] == arr[i][j + 1]) {
                arr[i][j] *= 2;
                arr[i][j + 1] = 0;
            }
        }
    }
    for (i = 0; i < arr.length; i++) {
        col = 0;
        for (j = 0; j < arr.length; j++) {
            if (arr[i][j] != 0) {
                arr[i][col] = arr[i][j];
                col++;
            }
        }
        for (j = col; j < arr.length; j++) {
            arr[i][j] = 0;
        }
    }

    return arr;
}
