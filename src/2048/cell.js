import React from 'react';

import './styles.css'

class Cell extends React.Component {

    constructor(props) {
        super(props);
    }

    getColour = (num) => {
        switch (num) {
            case 2: return '#EBDCD0';
            case 4: return '#E9DBBA';
            case 8: return '#E9A067';
            case 16: return '#F08151';
            case 32: return '#F2654F';
            case 64: return '#F1462C';
            case 128: return '#E7C65E';
            case 256: return '#E8C350';
            case 512: return '#E8BE40';
            case 1024: return '#E8BB31';
            case 2048: return '#E7B723';
            default: return '#C2B3A3';
        }
    }

    render() {
        return (
            <div id="cell" style={{ backgroundColor: this.getColour(this.props.val) }}>
                {this.props.val > 0 ? <span> {this.props.val} </span> : <span>  </span>}
            </div>
        );
    }
}

export default Cell;