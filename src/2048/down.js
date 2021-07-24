export default function down(arr) {

    let i, j, row;

    for (j = 0; j < arr.length; j++) {
        row = arr.length - 1;
        for (i = arr.length - 1; i >= 0; i--) {
            if (arr[i][j] !== 0) {
                arr[row][j] = arr[i][j];
                row--;
            }
        }
        for (i = row; i >= 0; i--) {
            arr[i][j] = 0;
        }
    }
    for (j = 0; j < arr.length; j++) {
        for (i = arr.length - 1; i > 0; i--) {
            if (arr[i][j] == arr[i - 1][j]) {
                arr[i][j] *= 2;
                arr[i - 1][j] = 0;
            }
        }
    }
    for (j = 0; j < arr.length; j++) {
        row = arr.length - 1;
        for (i = arr.length - 1; i >= 0; i--) {
            if (arr[i][j] !== 0) {
                arr[row][j] = arr[i][j];
                row--;
            }
        }
        for (i = row; i >= 0; i--) {
            arr[i][j] = 0;
        }
    }
    return arr;
}