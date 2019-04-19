import React, { Component } from 'react';
import BoatCard from './BoatCard';
import { Provider } from 'unstated';
import { Subscribe } from 'unstated';
import BoatsContainer from './BoatsContainer';
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
      <Provider>
        <Subscribe to={[BoatsContainer]}>
          {boatLoad => (
            <div className="App">
              <header>
                <div className='user'>
                  <span>Jane</span>
                </div>
                <div className="logo">
                  <h2>- Bob's -</h2>
                  <h1>Banana Boat</h1>
                  <h2>- Rentals -</h2>
                </div>
                <img alt="banana" className="header-pic" src="./assets/banana.png" />
              </header>
              <div className="content">
                <p>
                  Rent up to four banana boats. Each boat can have up to six people.
                  Bob's Banana Boat Rental's will also provide fresh banana's for your
                  hungry riders so just let us know how many bananas you think your party will need.
                </p>
                {boatCards}
                <div className="split">
                  <p>
                    {boatLoad.state.totals.boats} Boats<br />
                    {boatLoad.state.totals.people} People<br />
                    {boatLoad.state.totals.bananas} Bananas
                  </p>
                  <button onClick={() => {boatLoad.clear()}}>Rent Now</button>
                </div>
              </div>
              <footer>
                <small> Please don't feed bananas to </small>
                <h5><span role="img" aria-label="sea monkey">🐒</span> Sea Monkeys <span role="img" aria-label="sea monkey">🐒</span></h5>
              </footer>
            </div>
          )}
        </Subscribe>
      </Provider>
    );
  }
}

export default App;
