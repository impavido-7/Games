export default function partialArray(a) {
    let b = [];
    let size = a.length;

    for (let i = 0; i < size; i++) {
        b[i] = [];
        for (let j = 0; j < size; j++) {
            b[i].push({
                value: 0,
                fixed: false,
                highlight: false
            });
        }
    }

    let sqrt = Math.floor(Math.sqrt(size));
    for (let i = 0; i < size; i += sqrt) {
        for (let j = 0; j < size; j += sqrt) {
            let num = 1;
            while (num <= sqrt + 1) {
                let row = Math.floor(Math.random() * sqrt);
                let col = Math.floor(Math.random() * sqrt);
                if (b[i + row][j + col].value === 0) {
                    b[i + row][j + col].value = a[i + row][j + col];
                    b[i + row][j + col].fixed = true;
                    num++;
                }
            }
        }
    }
    return b;
}