import './App.css';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './Home';
import CowsAndBulls from './cowsAndBulls/game';
import Game2048 from './2048/game';
import Minesweeper from './minesweeper/game';
import Sudoku from './Sudoku/game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <>
            <Route exact path="/" component = {Home} />
            <Route path="/cowsAndBulls" component = {CowsAndBulls} />
            <Route path="/2048" component = {Game2048} />
            <Route path="/minesweeper" component = {Minesweeper} />
            <Route path="/sudoku" component = {Sudoku} />
          </>
        </Router>
      </header>
    </div>
  );
}

export default App;
