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
        <header className="App-header">
          <h1>Banana Boat</h1>
          <h2>🍌 Rentals 🍌</h2>
          <img className="header-pic" src="./assets/boat.png" />
        </header>
        <div className="content">
          {boatCards}
          <p>
            Select the number of boats and passengers for your party.
          </p>
          <button>Rent Now</button>
        </div>
      </div>
    );
  }
}

export default App;
