import React from 'react';

import { Link } from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <div>
                <Link to="/"> Home </Link> <br/>
                <Link to="/cowsAndBulls"> Cows And Bull </Link> <br/>
                <Link to="/2048"> 2048 </Link> <br/>
                <Link to="/minesweeper"> Minesweeper </Link> <br/>
                <Link to="/sudoku"> Sudoku </Link>
            </div>
        )
    }
}

export default Home;