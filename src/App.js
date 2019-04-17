import React, { Component } from 'react';
import BoatCard from './BoatCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Array for number of BoatCards we want
      boatCount: [0,1,2,3]
    };
  }

  render() {
    const boatCards = this.state.boatCount.map(num =>
      <BoatCard key={num} num={num} />
    );

    return (
      <div className="App">
        <header>
          <div className='user'>Jane <small>▼</small></div>
          <h1>Banana Boat</h1>
          <h2>- Rentals -</h2>
          <img alt="banana" className="header-pic" src="./assets/banana.png" />
        </header>
        <div className="content">
          <p>Select the number of boats and passengers for your party.</p>
          {boatCards}
          <br />
          <button>Rent Now</button>
        </div>
        <footer>
          <small> Brought to you by: </small>
          <p><span role="img" aria-label="banana">🍌</span> Bananas <span role="img" aria-label="banana">🍌</span></p>
        </footer>
      </div>
    );
  }
}

export default App;
