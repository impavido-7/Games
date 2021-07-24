import React from 'react';

import Cell from './Cell';

import createBoard from './createBoard';
import generateArray from './generateArray';
import click from './click';

class Minesweeper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bombAmount: 20,
            size: 10,
            bombSymbol: '💣',
            array: [],
            success: false,
            rules: false,
            failure: false
        }
    }

    clickEvent = (e) => {
        if (e.target.attributes[1]) {
            var str = e.target.attributes[1].value
            var row = parseInt(str[0]);
            var col = parseInt(str[1]);

            let a = click(this.state.array, row, col, this.state.bombSymbol);
            this.setState({
                array: a
            });
            if (this.state.array[row][col].value === this.state.bombSymbol) {
                setTimeout(() => {
                    this.setState({
                        failure: true
                    })
                }, 1000);
            }
        }
    }

    componentDidMount() {
        let a = createBoard(this.state.bombAmount, this.state.size, this.state.bombSymbol);
        a = generateArray(a, this.state.bombSymbol);
        this.setState({
            array: a
        });
        document.addEventListener('click', this.clickEvent);
    }

    checkSuccess = () => {
        let count = 0;
        for (let i = 0; i < this.state.size; i++) {
            for (let j = 0; j < this.state.size; j++) {
                if (this.state.array[i][j].visible === false) {
                    count++;
                }
            }
        }
        if (count === this.state.bombAmount) {
            return true;
        }
        else {
            return false;
        }
    }

    componentDidUpdate() {
        if (this.checkSuccess() && this.state.success === false) {
            this.setState({
                success: true
            })
        }
    }

    playAgain = () => {
        this.setState({
            bombAmount: 20,
            size: 10,
            bombSymbol: '💣',
            array: [],
            success: false,
            rules: false,
            failure: false
        });
        this.componentDidMount();
    }

    render() {
        if (this.state.success === true) {
            return (
                <React.Fragment>
                    <div id="navBar">
                        <button onClick={this.playAgain} id="rulesButton"> Play Again </button>
                    </div>
                    <div id="rulesDiv">
                        <p style={{ padding: "10px" }}>
                            Yay!!! you won the game... <br/>
                            Click on "Play Again" to play once again
                        </p>
                    </div>
                </React.Fragment>
            )
        }

        else if (this.state.failure === true) {
            return (
                <React.Fragment>
                    <div id="navBar">
                        <button onClick={this.playAgain} id="rulesButton"> Play Again </button>
                    </div>
                    <div id="rulesDiv">
                        <p style={{ padding: "10px" }}>
                            Oops!!! You lost the game... <br/>
                            Click on "Play Again" to play once again 
                        </p>
                    </div>
                </React.Fragment>
            )
        }

        else if (this.state.rules === true) {
            return (
                <React.Fragment>
                    <div id="navBar">
                        <button onClick={() => { this.setState({ rules: false }) }} id="rulesButton"> Play Again </button>
                    </div>
                    <div id="rulesDiv">
                        <p style={{ padding: "10px" }}>
                            There are <strong> {this.state.bombAmount} </strong> bombs and 
                            you need to find all the cells except the bombs. <br/> <br/>
                            The number in a particular cell indicates the number of bombs 
                            around it <br/> (8 surrounding cells).<br/> <br/>
                            If you find all the cells without clicking on bomb then you won this game
                        </p>
                    </div>
                </React.Fragment>
            )
        }

        else {
            return (
                <React.Fragment>
                    <div id="navBar">
                        <button onClick={() => { this.setState({ rules: true }) }} id="rulesButton"> Rules </button>
                    </div>
                    <div>
                        {this.state.array.map((item, rowIndex) => {
                            return (
                                <div key={rowIndex}>
                                    {item.map((i, index) => {
                                        return (
                                            <Cell key={index} row={rowIndex} col={index} val={i} />
                                        )
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default Minesweeper;