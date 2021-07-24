import React from 'react';

import Cell from './cell';

import Up from './up'
import Down from './down';
import Left from './left';
import Right from './right';

class Game2048 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            a: [],
            gameOver: false,
            success: false
        }
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
            let arr = Up(this.state.a);
            this.setState({
                a: arr
            });
            this.getArray();
        }
        else if (e.keyCode == 37) {
            let arr = Left(this.state.a);
            this.setState({
                a: arr
            });
            this.getArray();
        }
        else if (e.keyCode == 39) {
            let arr = Right(this.state.a);
            this.setState({
                a: arr
            });
            this.getArray();
        }
        else if (e.keyCode == 40) {
            let arr = Down(this.state.a);
            this.setState({
                a: arr
            });
            this.getArray();
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
                if(arr[i][j] === 2048) {
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