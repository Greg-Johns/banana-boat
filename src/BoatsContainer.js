import { Container } from 'unstated';

class BoatsContainer extends Container {
  constructor() {
    super();
    // Hydrate Global state from localStorage if available
    localStorage.getItem('boats') && localStorage.getItem('totals')
      ? this.setState({
          boats: JSON.parse(localStorage.getItem('boats')),
          totals: JSON.parse(localStorage.getItem('totals'))
        })
      : console.log("localStorage empty");
    // Else start fresh
// TODOs
// put in some JsDocs
    // DO SOMETHING ELSE WITH THIS!!!
    this.state = {
      boats: [
        {
          enabled: true,
          peopleCount: 1,
          bananaCount: 0
        },
        {
          enabled: false,
          peopleCount: 1,
          bananaCount: 0
        },
        {
          enabled: false,
          peopleCount: 1,
          bananaCount: 0
        },
        {
          enabled: false,
          peopleCount: 1,
          bananaCount: 0
        }
      ],
      totals: {
        boats: 1,
        people: 1,
        bananas: 0
      }
    }
  };

  setPeopleCount = async (boatNum, val) => {
    // Clone old boats state
    let boats = this.state.boats.slice();
    // Update boatNum's people count
    boats[boatNum].peopleCount = Number(val);
    // Set state to new boats
    await this.setState({boats: boats});
    // Update totals
    this.calcTotals();
  }

  setBananaCount = async (boatNum, val) => {
    let boats = this.state.boats.slice();
    boats[boatNum].bananaCount = Number(val);
    await this.setState({boats: boats});
    this.calcTotals();
  }

  disableBoats = async (boatNum) => {
    let boatsLength = this.state.boats.length -1;
    let newBoats = this.state.boats.slice();
    // Set disabled on boatNum and the rest...
    while (boatNum <= boatsLength) {
      // Disable all BoatCards after boatNum and reset values
      newBoats[boatNum] = { enabled: false, peopleCount: 1, bananaCount: 0}
      boatNum ++;
    }
    localStorage.setItem( "boats", JSON.stringify(newBoats) );
    await this.setState({boats: newBoats});
    this.calcTotals();
  }

  enableBoats = async (boatNum) => {
    let newBoats = this.state.boats.slice();
    // Enable BoatCards up to boatNum
    while (boatNum >= 0) {
      newBoats[boatNum] = {
        enabled: true,
        peopleCount: newBoats[boatNum].peopleCount,
        bananaCount: newBoats[boatNum].bananaCount
      }
      this.setPeopleCount(boatNum, 1)
      boatNum --;
    }
    // Save to localStorage
    localStorage.setItem( "boats", JSON.stringify(newBoats) );
    // Update state
    await this.setState({boats: newBoats});
  }

  calcTotals = async () => {
    // Calc and set totals then save to localStorage

    // Get number of all enabled boats
    let enabledBoats = this.state.boats.filter(boat => boat.enabled);
    let totalBoats = enabledBoats.length;

    // Get total people count for all enabled boats
    let totalPeople = enabledBoats.reduce((a, b) => a + b.peopleCount, 0);
    // Get total banana count for all enabled boats
    let totalBananas = enabledBoats.reduce((a, b) => a + b.bananaCount, 0);
    // make totals obj with vals
    let totals = {
      boats: totalBoats,
      people: totalPeople,
      bananas: totalBananas
    }
    // Update state totals with new totals
    await this.setState({ totals: totals });
    // Save to localStorage
    localStorage.setItem("totals", JSON.stringify(totals));
  }

  // Reset function for demo purposes
  clear = () => {
    localStorage.removeItem("boats");
    localStorage.removeItem("totals");
    // Set state to defaults
    this.setState({boats: [
        {
          enabled: true,
          peopleCount: 1,
          bananaCount: 0
        },
        {
          enabled: false,
          peopleCount: 1,
          bananaCount: 0
        },
        {
          enabled: false,
          peopleCount: 1,
          bananaCount: 0
        },
        {
          enabled: false,
          peopleCount: 1,
          bananaCount: 0
        }
      ],
      totals: {
        boats: 1,
        people: 1,
        bananas: 0
      }
    });
  }
}

export default BoatsContainer;
