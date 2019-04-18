import React, { Component } from 'react';


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
    fontSize: '12px',
    backgroundColor: `${disabledBlue}`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  Boat: {
    display: `inline-block`,
    textAlign: `left`,
    backgroundColor: `${disabledBlue}`,
    border: `8px solid ${disabledBlue}`,
    width: `140px`,
    margin: `10px`,
    borderRadius: `6px`,
    filter: 'drop-shadow(2px 2px 2px #31788E)'
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

  render(props) {
    // Options helper functions
    const peopleValues = this.state.peopleRange.map((num) =>
      <option key={num} value={num}>{num}</option>
    );
    const monkeyValues = this.state.monkeyRange.map((num) =>
      <option key={num} value={num}>{num}</option>
    );

    let BoatNum = this.props.num;

    return (
      <div style={s.Boat}>
        <input
          style={(BoatNum === 0) ? {display: "none"} : {display: "inline"}}
          type="checkbox"
        />
        <h6>Boat {BoatNum + 1}</h6>
        <div style={s.optsEnabled}>
          <div>
            <label style={s.label}>People:</label>
            <select
              name="peopleOps"
            >
              {peopleValues}
            </select>
          </div>
          <div>
            <label style={s.label}>Monkeys:</label>
            <select
              name="monkeyOps"
            >
              {monkeyValues}
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default BoatCard;
