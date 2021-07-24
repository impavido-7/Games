import React from 'react';
import './mycss.css';

class CowsAndBulls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 4,
            a: [],
            history: [],
            success: false,
            rules: false,
            userNumber: ""
        }
    }

    getNumber = (e) => {
        this.setState({
            userNumber: e.target.value
        })
    }

    getCount = (e) => {
        let str = this.state.userNumber;
        if (!(/[1-9]{4}/.test(str))) {
            this.setState({
                userNumber: ""
            })
            alert('Enter only numbers :) ');
        }
        else if (str.length === this.state.size) {
            let cow = 0, bull = 0;
            for (let i = 0; i < this.state.size; i++) {
                let pos = this.state.a.indexOf(parseInt(str[i]));
                if (pos === i) {
                    bull++;
                } else if (pos !== -1) {
                    cow++;
                }
            }

            this.setState({
                userNumber: ""
            })

            if (bull === this.state.size) {
                this.setState({
                    success: true
                })
            }
            else {
                str = `Cow: ${cow} Bull: ${bull}`;
                this.setState({
                    history: [
                        {
                            Number: this.state.userNumber,
                            Result: str
                        },
                        ...this.state.history
                    ]
                })
            }
        }
        else {
            alert(`Enter only ${this.state.size} digit number`);
        }
    }

    componentDidMount() {
        let arr = [];
        while (arr.length !== this.state.size) {
            let num = Math.floor(Math.random() * 10);
            if (num > 0 && arr.indexOf(num) === -1) {
                arr.push(num);
            }
        }
        this.setState({
            a: arr
        })
    }

    render() {

        if (this.state.success === true) {
            return (
                <div id="parent">
                    <div className="topnav">
                        <button id="span" onClick={() => { this.componentDidMount(); this.setState({ success: false, history: [] }) }}>
                            Play Again
                        </button>
                    </div>
                    <br />
                    <div id="parent_div_3">
                        <p> Yay!!! You got it </p>
                        <p> You took {this.state.history.length} chances to guess </p>
                    </div>
                </div>
            );
        }

        else if (this.state.rules === true) {
            return (
                <div id="parent">
                    <div className="topnav">
                        <button id="span" onClick={() => { this.setState({ rules: false }) }}>
                            Back to Game
                        </button>
                    </div>
                    <br />
                    <div id="parent_div_3">
                        <p>
                            You need to guess the <span> {this.state.size} </span> digit number right...
                        </p>
                        <p>
                            Bull means the number is present in the generated number and it is in the
                            same position.
                            Cow means the number is present in the generated number but the
                            position isn't matched.
                        </p>


                        <strong>For Example</strong>, If the generated number is 1256 and the number you guessed is 1235
                        then there will be two bulls ( one each for 1, 2) and one cow (for 5)

                        You need to make 4 bulls to win the game
                        <p>
                            <b>Note:</b> Numbers won't repeat in the generated number and zero won't be present
                        </p>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div id="parent">
                    <div className="topnav">
                        <button id="span" onClick={() => { this.setState({ rules: true }) }}> Rules </button>
                    </div>
                    <br />
                    <div id="parent_div_1">
                        <input
                            id="inputID"
                            type="name"
                            name="username"
                            placeholder="Enter Number"
                            onChange={this.getNumber}
                            value={this.state.userNumber}
                        />
                        <br /> <br />
                        <button id="buttonID" onClick={this.getCount}> Get Result </button>
                    </div>
                    <div id="parent_div_2">
                        <table id="tableStyles">
                            <caption> <strong> Your Result </strong> </caption>
                            <tbody>
                                <tr>
                                    <th> Number </th>
                                    <th> Result </th>
                                </tr>
                            </tbody>
                            {this.state.history.map(item => {
                                return (
                                    <tr>
                                        <td> {item.Number} </td>
                                        <td> {item.Result} </td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            )
        }
    }
}

export default CowsAndBulls;