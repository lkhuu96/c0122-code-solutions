import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.clickToggle = this.clickToggle.bind(this);
  }

  clickToggle() {
    this.setState(() => ({
      toggle: !this.state.toggle
    }));
  }

  render() {
    let position = {};
    let switchColor = {};
    let label = 'OFF';
    if (this.state.toggle === false) {
      switchColor = {
        backgroundColor: 'gray'
      };
      position = {
        left: 0
      };
    } else {
      switchColor = {
        backgroundColor: 'green'
      };
      position = {
        right: 0
      };
      label = 'React is a library';
    }
    return (
      <div className='row col-gap'>
        <div>
          <div className='row'>
            <div className="switch" style={switchColor}></div>
            <div onClick={this.clickToggle} style={position} className="circle"></div>
          </div>
        </div>
        <div>
          <p>{label}</p>
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;
