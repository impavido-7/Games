import React from 'react';

import Cell from './cell';

import generateArray from './generateArray';
import generatePartialArray from './generatePartialArray';

class Sudoku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 9,
            a: [],
            b: [],
            currCell: "",
            success: false
        };
    }

    highlight = (str) => {
        let arr = this.state.b;
        let row, col;
        if (this.state.currCell.length > 0) {
            row = parseInt(this.state.currCell[0]);
            col = parseInt(this.state.currCell[1]);
            if (arr[row][col].highlight === true)
                arr[row][col].highlight = false;
        }
        row = str[0];
        col = str[1];
        if (arr[row][col].fixed === false) {
            arr[row][col].highlight = true;
        }
        this.setState({
            b: arr
        });
    }

    clickEvent = (e) => {

        if (!(e.srcElement.className === "App-header")) {
            if (e.target.attributes[0].value === "numButton") {
                if (this.state.currCell.length > 0) {
                    let row = parseInt(this.state.currCell[0]);
                    let col = parseInt(this.state.currCell[1]);
                    if (this.state.b[row][col].fixed === false) {
                        let val = parseInt(e.srcElement.innerText);
                        let arr = this.state.b;
                        arr[row][col].value = val;
                        arr[row][col].highlight = false;
                        this.setState({
                            b: arr,
                            currCell: ""
                        });
                    }
                }
            }

            else if (e.target.children[0].attributes[0]) {
                this.highlight(e.target.children[0].attributes[0].value);
                this.setState({
                    currCell: e.target.children[0].attributes[0].value
                });
            }

            else if (e.target.attributes[0].value.length > 0) {
                this.highlight(e.target.attributes[0].value);
                this.setState({
                    currCell: e.target.attributes[0].value
                });
            }

        }

    }

    componentDidMount() {
        let arr = generateArray(this.state.size);
        this.setState({
            a: arr
        });
        arr = generatePartialArray(arr);
        this.setState({
            b: arr
        });
        document.addEventListener('click', this.clickEvent);
    }

    checkSuccess = () => {
        let arr1 = this.state.a;
        let arr2 = this.state.b;
        for (let i = 0; i < arr1.size; i++) {
            for (let j = 0; j < arr1.size; j++) {
                if (arr1[i][j] != arr2[i][j])
                    return false;
            }
        }
        return true;
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
            size: 9,
            a: [],
            b: [],
            currCell: "",
            success: false
        });
        this.componentDidMount();
    }

    render() {
        if (this.state.success === true) {
            return (
                <div id='header'>
                    <button id="success" onClick={this.playAgain}> Play Again </button>
                    <p> Yay!!! You got it </p>
                </div>
            )
        }

        else {
            return (
                <React.Fragment>
                    <div>
                        {this.state.b.map((item, rowIndex) => {
                            return (
                                <div key={rowIndex}>
                                    {item.map((i, index) => {
                                        return (
                                            <Cell key={index} size={this.state.size} row={rowIndex} col={index} val={i} />
                                        )
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    <br /> <br />
                    <div>
                        <button className="numButton"> 1 </button>
                        <button className="numButton"> 2 </button>
                        <button className="numButton"> 3 </button>
                        <button className="numButton"> 4 </button>
                        <button className="numButton"> 5 </button>
                        <button className="numButton"> 6 </button>
                        <button className="numButton"> 7 </button>
                        <button className="numButton"> 8 </button>
                        <button className="numButton"> 9 </button>
                    </div>
                </React.Fragment>
            );
        }
    }


}

export default Sudoku;