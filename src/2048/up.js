export default function up(arr) {
    let i, j, row;

    // For moving the contents up
    for (j = 0; j < arr.length; j++) {
        row = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i][j] !== 0) {
                arr[row][j] = arr[i][j];
                row++;
            }
        }
        for (i = row; i < arr.length; i++) {
            arr[i][j] = 0;
        }
    }

    // For adding
    for (j = 0; j < arr.length; j++) {
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i][j] == arr[i + 1][j]) {
                arr[i][j] *= 2;
                arr[i + 1][j] = 0;
            }
        }
    }

    // For merging again
    for (j = 0; j < arr.length; j++) {
        row = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i][j] !== 0) {
                arr[row][j] = arr[i][j];
                row++;
            }
        }
        for (i = row; i < arr.length; i++) {
            arr[i][j] = 0;
        }
    }

    return arr;
}