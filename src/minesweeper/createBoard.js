export default function createBoard(bombAmount, size, bombSymbol) {
    let shuffledArray = [];
    for (let i = 0; i < size; i++) {
        shuffledArray[i] = [];
        for (let j = 0; j < size; j++) {
            shuffledArray[i].push({
                value: 0,
                visible: false
            });
        }
    }
    let i = 0;
    while (i <= bombAmount) {
        let row = Math.floor(Math.random() * size);
        let col = Math.floor(Math.random() * size);
        if(shuffledArray[row][col].value === 0) {
            shuffledArray[row][col].value = bombSymbol;
            i++;
        }
    }
    return shuffledArray;
}