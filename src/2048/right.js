export default function right(arr) {

    let i, j, col;

    for (i = 0; i < arr.length; i++) {
        col = arr.length - 1;
        for (j = arr.length - 1; j >= 0; j--) {
            if (arr[i][j] != 0) {
                arr[i][col] = arr[i][j];
                col--;
            }
        }
        for (j = col; j >= 0; j--) {
            arr[i][j] = 0;
        }
    }
    for (i = 0; i < arr.length; i++) {
        for (j = arr.length - 1; j > 0; j--) {
            if (arr[i][j] == arr[i][j - 1]) {
                arr[i][j] *= 2;
                arr[i][j - 1] = 0;
            }
        }
    }
    for (i = 0; i < arr.length; i++) {
        col = arr.length - 1;
        for (j = arr.length - 1; j >= 0; j--) {
            if (arr[i][j] != 0) {
                arr[i][col] = arr[i][j];
                col--;
            }
        }
        for (j = col; j >= 0; j--) {
            arr[i][j] = 0;
        }
    }

    return arr;
}