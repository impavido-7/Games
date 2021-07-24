import React from 'react';
import './mystyles.css'

class Cell extends React.Component {

    constructor(props) {
        super(props);
    }

    getBorderColour = (row, col, highlight, size) => {
        let val = Math.floor(Math.sqrt(size));
        let obj = {};

        if (col % val === 0) {
            obj = {
                borderLeft: "1px solid black"
            }
        }

        if (row % val === 0) {
            obj = {
                ...obj,
                borderTop: "1px solid black"
            }
        }

        if (row === size - 1) {
            obj = {
                ...obj,
                borderBottom: "1px solid black"
            }
        }

        if (col === size - 1) {
            obj = {
                ...obj,
                borderRight: "1px solid black"
            }
        }

        if (highlight === true) {
            obj = { 
                ...obj,
                backgroundColor: "grey"
            }
        }
        return obj;
    }

    /*
    getBorderColour = (row, col, size) => {
        let val = Math.floor(Math.sqrt(size));

        if (col % val === 0) {
            if (row % val === 0) {
                return {
                    borderTop: "1px solid black",
                    borderLeft: "1px solid black"
                }
            }
            else if (row === size - 1) {
                return {
                    borderBottom: "1px solid black",
                    borderLeft: "1px solid black"
                }
            }
            return {
                borderLeft: "1px solid black"
            }
        }

        if (row % val === 0) {
            if (col === size - 1) {
                return {
                    borderTop: "1px solid black",
                    borderRight: "1px solid black",
                }
            }
            return {
                borderTop: "1px solid black"
            }
        }

        if (row === size - 1) {
            if (col === size - 1) {
                return {
                    borderBottom: "1px solid black",
                    borderRight: "1px solid black"
                }
            }
            return {
                borderBottom: "1px solid black"
            }
        }

        if (col === size - 1) {
            return {
                borderRight: "1px solid black"
            }
        }

    }
    */
    render() {
        var str = '0' + this.props.row + this.props.col;
        str = str.substring(1);
            return (
                <div
                    id="cell"
                    style={this.getBorderColour(this.props.row, this.props.col, this.props.val.highlight, this.props.size)}
                >
                    {
                        this.props.val.value > 0 ?
                            this.props.val.fixed === true ?
                                <span rowcol={str} style={{ fontWeight: "bold" }}>  {this.props.val.value} </span> :
                                <span rowcol={str}> {this.props.val.value} </span>

                            : <span rowcol={str} ></span>
                    }
                </div>
            );
        }
}

export default Cell;