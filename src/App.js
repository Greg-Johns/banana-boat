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
                <h2>- Bob's -</h2>
                <h1>Banana Boat</h1>
                <h2>- Rentals -</h2>
                <img alt="banana" className="header-pic" src="./assets/banana.png" />
              </header>
              <div className="content">
                <p>Welcome back Jane</p>
                {boatCards}
                <div className="split">
                  <p>
                    {boatLoad.state.totals.boats} boats<br />
                    {boatLoad.state.totals.people} people<br />
                    {boatLoad.state.totals.bananas} bananas
                  </p>
                  <button>Rent Now</button>
                </div>
              </div>
              <footer>
                <small> Brought to you by: </small>
                <p><span role="img" aria-label="banana">🍌</span> Bananas <span role="img" aria-label="banana">🍌</span></p>
              </footer>
            </div>
          )}
        </Subscribe>
      </Provider>
    );
  }
}

export default App;
