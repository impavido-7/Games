import React from 'react';
import './mystyles.css'

class Cell extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var str = '0' + this.props.row + this.props.col;
        str = str.substring(1);
        return (
            <div id="cell" rowcol={str}>
                {this.props.val.visible===true ? <> {this.props.val.value} </> : <> </> }
                {/* {this.props.val > 0 ? <span> {this.props.val} </span> : <span>  </span>} */}
            </div>
        );
    }
}

export default Cell;