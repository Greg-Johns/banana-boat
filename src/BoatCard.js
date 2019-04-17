import React, { Component } from 'react';


// Styles
const disabledBlue = '#5CD1F6';

const s = {
  optsEnabled: {
    fontSize: '12px',
    backgroundColor: '#FFFEDA',
    padding: '6px',
    // display: 'flex',
    // flexDirection: 'column',
    borderRadius: `2px`,
    // justifyContent: 'space-evenly',
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
    border: `4px solid ${disabledBlue}`,
    width: `120px`,
    margin: `6px`,
    borderRadius: `6px`,
    filter: 'drop-shadow(2px 2px 2px #31788E)'
  },
  h6: {
    fontSize: '14px',
    textAlign: 'left',
    margin: 0,
    paddingLeft: '4px',
    lineHeight: '1.6',
    color: '#F3F825',
    backgroundColor: `${disabledBlue}`
  },
  label: {
    color: '#666',
    paddingRight: '10px',
    display: 'inline-block',
    width: '54px',
    textAlign: 'right',
    // display: 'block',
    fontSize: '11px',
    margin: '6px 0'
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
        <h6 style={s.h6}>
          <input
            style={(BoatNum === 0) ? {display: "none"} : {display: "inline"}}
            type="checkbox"
          />
          Boat {BoatNum + 1}
        </h6>
        <div style={s.optsEnabled}>
          <div>
            <label style={s.label}>
              People
            </label>
            <select
              name="peopleOps"
            >
              {peopleValues}
            </select>
          </div>
          <div>
            <label style={s.label}>
              Monkeys
            </label>
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
