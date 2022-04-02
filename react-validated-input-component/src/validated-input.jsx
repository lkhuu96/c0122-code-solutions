import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusMessage: null,
      input: '',
      goodPassword: false
    };
    this.checkInput = this.checkInput.bind(this);
    this.returnFalse = this.returnFalse.bind(this);
    this.makeIcon = this.makeIcon.bind(this);
  }

  checkInput(event) {
    if (event.target.value.length < 8) {
      this.setState({
        input: event.target.value,
        goodPassword: false,
        statusMessage: 'Your password is too short'
      });
    } else {
      this.setState({
        input: event.target.value,
        goodPassword: true,
        statusMessage: ''
      });
    }
  }

  makeIcon() {
    if (!this.state.input) {
      return null;
    }
    return (
      <i className={this.state.goodPassword ? 'green fas fa-check' : 'red fas fa-times'}></i>
    );
  }

  returnFalse(event) {
    event.preventDefault();
    if (!this.state.input) {
      this.setState({
        statusMessage: 'A password is required',
        goodPassword: false
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.returnFalse}>
        <label htmlFor='password'>Password</label>
          <div className="row center">
            <input type="password" name='password' onChange={this.checkInput} autoComplete='false'></input>
            {this.makeIcon()}
          </div>
          <div className='red'>
            {this.state.statusMessage}
          </div>
      </form>
    );
  }
}
export default Input;
