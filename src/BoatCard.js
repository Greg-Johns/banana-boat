import React, { Component } from 'react'
import { Subscribe } from 'unstated'
import BoatsContainer from './BoatsContainer'

// Styles
const enabledBlue = '#2FCDFF'
const disabledBlue = '#5CD1F6'

const s = {
  optsEnabled: {
    fontSize: '12px',
    backgroundColor: '#FFFEDA',
    padding: '6px',
    borderRadius: `2px`,
    zIndex: '100'
  },
  optsDisabled: {
    backgroundColor: `${disabledBlue}`
  },
  boatEnabled: {
    display: `inline-block`,
    textAlign: `left`,
    backgroundColor: `${enabledBlue}`,
    border: `8px solid ${enabledBlue}`,
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
    borderRadius: `8px`,
    filter: 'drop-shadow(-1px 1px 1px #31788E)'
  },
  nanersEnabled: {
    padding: '1px',
    paddingLeft: '6px',
    width: '28px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  nanersDisabled: {
    padding: '1px',
    paddingLeft: '6px',
    width: '28px',
    backgroundColor: '#B2EDFF',
    border: '0 solid #B2EDFF',
    borderRadius: '4px'
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
  constructor (props) {
    super(props)
    // Set range values for people & banana options
    this.state = {
      peopleRange: [1, 2, 3, 4, 5, 6]
    }
  }

  componentWillMount () {
    if (localStorage.getItem('boats')) {
      let fromStorage = localStorage.getItem('boats')
      this.setState({boats: fromStorage})
    }
  }

  render (props) {
    // Options helper functions
    const peopleValues = this.state.peopleRange.map((num) =>
      <option key={num} value={num}>{num}</option>
    )

    let boatNum = this.props.num

    return (
      <Subscribe to={[BoatsContainer]}>
        {boatLoad => (
          <div style={boatLoad.state.boats[boatNum].enabled
            ? s.boatEnabled
            : s.boatDisabled}
          >
            <input
              style={(boatNum === 0) ? {display: 'none'} : {display: 'inline'}}
              type='checkbox'
              checked={boatLoad.state.boats[boatNum].enabled}
              onChange={() =>
                boatLoad.state.boats[boatNum].enabled
                ? boatLoad.disableBoats(boatNum)
                : boatLoad.enableBoats(boatNum)
              } />
            <h6>Boat {boatNum + 1}</h6>
            <div style={
              boatLoad.state.boats[boatNum].enabled
              ? s.optsEnabled
              : s.optsDisabled
            }>
              <div>
                <label style={s.label}>People:</label>
                <select
                  disabled={!boatLoad.state.boats[boatNum].enabled}
                  name='peopleOps'
                  value={boatLoad.state.boats[boatNum].peopleCount}
                  onChange={(e) => boatLoad.setPeopleCount(boatNum, e.target.value)}
                >
                  {peopleValues}
                </select>
              </div>
              <div>
                <label style={s.label}>Bananas:</label>
                <input
                  disabled={!boatLoad.state.boats[boatNum].enabled}
                  style={
                    boatLoad.state.boats[boatNum].enabled
                    ? s.nanersEnabled
                    : s.nanersDisabled
                  }
                  type='text'
                  id='nana'
                  name='nana'
                  maxlength='3'
                  value={boatLoad.state.boats[boatNum].bananaCount}
                  onChange={(e) => boatLoad.setBananaCount(boatNum, e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </Subscribe>
    )
  }
}

export default BoatCard
