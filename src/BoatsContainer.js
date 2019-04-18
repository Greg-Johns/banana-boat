import { Container } from 'unstated';

class BoatsContainer extends Container {
  constructor() {
    super();
    // If boats in localStorage then refreash boats state
    localStorage.getItem('boats')
      ? this.setState({boats: JSON.parse(localStorage.getItem('boats'))})
      : console.log("localStorage empty");
    // Else start fresh
    this.state = {
      boats: [
        {
          enabled: true,
          peopleCount: 0,
          monkeyCount: 0
        },
        {
          enabled: false,
          peopleCount: 0,
          monkeyCount: 0
        },
        {
          enabled: false,
          peopleCount: 0,
          monkeyCount: 0
        },
        {
          enabled: false,
          peopleCount: 0,
          monkeyCount: 0
        }
      ]
    }
  }

  setPeopleCount(boatNum, val) {
    // Clone old room state
    let boats = this.state.boats.slice();
    // Add new value
    boats[boatNum].peopleCount = Number(val);
    // Save to localStorage
    localStorage.setItem( "boats", JSON.stringify(boats) );
    // Save to state
    this.setState({boats: boats});
  }

  setMonkeyCount(boatNum, val) {
    let boats = this.state.boats.slice();
    boats[boatNum].monkeyCount = Number(val);
    localStorage.setItem( "boats", JSON.stringify(boats) );
    this.setState({boats: boats});
  }

  dissableBoats(boatNum) {
    let boatsLength = this.state.boats.length -1;

    let newBoats = this.state.boats.slice();
    let i = boatNum;
    // Set disabled on boatNum and the rest
    while (i <= boatsLength) {
      newBoats[i] = { enabled: false, peopleCount: 1, monkeyCount: 0}
      i ++;
    }
    localStorage.setItem( "boats", JSON.stringify(newBoats) );
    this.setState({boats: newBoats});
  }

  enableBoats(boatNum) {
    let newBoats = this.state.boats.slice();
    let i = boatNum;
    // Set enabled up to boatNum
    while (i >= 0) {
      newBoats[i] = { enabled: true }
      i --;
    }
    localStorage.setItem( "boats", JSON.stringify(newBoats) );
    this.setState({boats: newBoats});
  }
}

export default BoatsContainer;
