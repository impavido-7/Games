import React from 'react';

import Cell from './cell';

class Game2048 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            a: [],
            gameOver: false,
            success: false
        }
    }

    up = () => {

        let i, j, row;
        let arr = this.state.a;

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

        this.setState({
            a: arr
        });

        this.getArray();

    }

    left = () => {

        let i, j, col;
        let arr = this.state.a;

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

        this.setState({
            a: arr
        });

        this.getArray();

    }

    down = () => {

        let i, j, row;
        let arr = this.state.a;

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

        this.setState({
            a: arr
        });

        this.getArray();

    }

    right = () => {

        let i, j, col;
        let arr = this.state.a;

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

        this.setState({
            a: arr
        });

        this.getArray();

    }

    checkAvailability = (i, j) => {
        if (this.state.a[i][j] === 0) {
            return true;
        }
        return false;
    }

    isEmpty = () => {
        for (let i = 0; i < this.state.a.length; i++) {
            for (let j = 0; j < this.state.a[i].length; j++) {
                if (this.state.a[i][j] === 0)
                    return true;
            }
        }
        return false;
    }

    clickEvent = (e) => {
        if (e.keyCode == 38) {
            this.up();
        }
        else if (e.keyCode == 37) {
            this.left();
        }
        else if (e.keyCode == 39) {
            this.right();
        }
        else if (e.keyCode == 40) {
            this.down();
        }
        else {
            alert('Use only arraw keys please')
        }
    }

    componentDidMount() {
        let arr = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        this.setState({
            a: arr
        });
        let row = Math.floor(Math.random() * arr.length);
        let col = Math.floor(Math.random() * arr.length);
        arr[row][col] = 2;
        this.setState({
            a: arr
        });
        document.addEventListener('keydown', this.clickEvent);
    }

    getSuccesss = () => {
        let arr = this.state.a;
        for(let i=0; i<arr.length; i++) {
            for(let j=0; j<arr.length; j++) {
                if(arr[i][j] === 32) {
                    return true;
                }
            }
        }
        return false;
    }

    componentDidUpdate() {
        if(this.getSuccesss() && !this.state.success) {
            this.setState({
                success: true
            })
        }
    }

    getArray = () => {
        if (!this.isEmpty()) {
            this.setState({
                gameOver: true
            })
        }
        else {
            let arr = this.state.a;
            while (1) {
                let row = Math.floor(Math.random() * arr.length);
                let col = Math.floor(Math.random() * arr.length);

                if (this.checkAvailability(row, col)) {
                    arr[row][col] = 2;
                    this.setState({
                        a: arr
                    })
                    break;
                }
            }
        }
    }

    playAgain = () => {
        this.setState({
            a: [],
            gameOver: false,
            success: false
        });
        this.componentDidMount();
    }

    render() {

        if (this.state.gameOver === true) {
            return (
                <div className="again">
                    <p id="text" style={{color: "red"}}> You failed this game </p>
                    <button id="button" onClick={this.playAgain}> Play Again </button>
                </div>
            )
        }

        else if (this.state.success === true) {
            return (
                <div className="again">
                    <p id="text" style={{color: "green"}}> You got it!!! </p>
                    <button id="button" onClick={this.playAgain}> Play Again </button>
                </div>
            )
        }

        else {
            return (
                <React.Fragment>
                    <div>
                        {this.state.a.map((item, rowIndex) => {
                            return (
                                <div key={rowIndex}>
                                    {item.map((i, index) => {
                                        return (
                                            <Cell key={index} val={i} />
                                        )
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default Game2048;