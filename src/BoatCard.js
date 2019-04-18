import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import BoatsContainer from './BoatsContainer';


// Styles
const disabledBlue = '#5CD1F6';

const s = {
  optsEnabled: {
    fontSize: '12px',
    backgroundColor: '#FFFEDA',
    padding: '6px',
    borderRadius: `2px`,
    zIndex: '100'
  },
  optsDisabled: {
    backgroundColor: `${disabledBlue}`,
  },
  boatEnabled: {
    display: `inline-block`,
    textAlign: `left`,
    backgroundColor: `${disabledBlue}`,
    border: `8px solid ${disabledBlue}`,
    width: `140px`,
    margin: `10px`,
    borderRadius: `6px`,
    filter: 'drop-shadow(-2px 2px 2px #31788E)'
  },
  boatDisabled: {
    display: `inline-block`,
    textAlign: `left`,
    backgroundColor: `${disabledBlue}`,
    border: `8px solid ${disabledBlue}`,
    width: `140px`,
    margin: `10px`,
    borderRadius: `6px`,
    borderRadius: `8px`,
    filter: 'drop-shadow(-1px 1px 1px #31788E)'
  },
  label: {
    color: '#666',
    paddingRight: '10px',
    display: 'inline-block',
    width: '60px',
    textAlign: 'right',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    margin: '8px 0'
  }
}

class BoatCard extends Component {
  constructor(props) {
    super(props);
    // Set range values for people & monkey options
    this.state = {
      peopleRange: [1,2],
      monkeyRange: [0,1,2,3,4]
    };
  }

  componentWillMount() {
    if (localStorage.getItem('boats')) {
      let fromStorage = localStorage.getItem('boats');
      this.setState({boats: fromStorage});
    }
  }

  render(props) {
    // Options helper functions
    const peopleValues = this.state.peopleRange.map((num) =>
      <option key={num} value={num}>{num}</option>
    );
    const monkeyValues = this.state.monkeyRange.map((num) =>
      <option key={num} value={num}>{num}</option>
    );

    let boatNum = this.props.num;

    return (
      <Subscribe to={[BoatsContainer]}>
        {counter => (
          <div style={counter.state.boats[boatNum].enabled
          ? s.boatEnabled
          : s.boatDisabled}
        >
            <input
              style={(boatNum === 0) ? {display: "none"} : {display: "inline"}}
              type="checkbox"
              checked={counter.state.boats[boatNum].enabled}
              onChange={() =>
                counter.state.boats[boatNum].enabled
                ? counter.dissableBoats(boatNum)
                : counter.enableBoats(boatNum)
              } />
            <h6>Boat {boatNum + 1}</h6>
            <div style={
              counter.state.boats[boatNum].enabled
              ? s.optsEnabled
              : s.optsDisabled}
            >
              <div>
                <label style={s.label}>People:</label>
                <select
                  disabled={!counter.state.boats[boatNum].enabled}
                  name="peopleOps"
                  value={counter.state.boats[boatNum].peopleCount}
                  onChange={(e) => counter.setPeopleCount(boatNum, e.target.value)}
                >
                  {peopleValues}
                </select>
              </div>
              <div>
                <label style={s.label}>Monkeys:</label>
                <select
                  disabled={!counter.state.boats[boatNum].enabled}
                  name="monkeyOps"
                  value={counter.state.boats[boatNum].monkeyCount}
                  onChange={(e) => counter.setMonkeyCount(boatNum, e.target.value)}
                >
                  {monkeyValues}
                </select>
              </div>
            </div>
          </div>
        )}
      </Subscribe>
    )
  }
}

export default BoatCard;
