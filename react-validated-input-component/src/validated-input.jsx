import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      showError: false,
      goodPassword: false,
      showIcon: false
    };
    this.checkInput = this.checkInput.bind(this);
    this.returnFalse = this.returnFalse.bind(this);
    this.makeIcon = this.makeIcon.bind(this);
    this.errorMessage = this.errorMessage.bind(this);
    this.trackInput = this.trackInput.bind(this);
  }

  trackInput(event) {
    this.setState({
      input: event.target.value
    });
    this.checkInput(event);
  }

  checkInput(event) {
    if (event.target.value.length > 0 && event.target.value.length < 8) {
      this.setState({
        showError: true,
        goodPassword: false,
        showIcon: true
      });
    } else if (event.target.value.length >= 8) {
      this.setState({
        showError: false,
        goodPassword: true
      });
    } else {
      this.setState({
        showError: false,
        showIcon: false
      });
    }
  }

  errorMessage() {
    if (!this.state.input) {
      return 'A password is required';
    } else {
      return 'Your password is too short';
    }
  }

  makeIcon() {
    return (
      <i className={this.state.goodPassword ? 'green fas fa-check' : 'red fas fa-times'}></i>
    );
  }

  returnFalse(event) {
    event.preventDefault();
    if (this.state.input.length < 1) {
      this.setState({
        showError: true,
        showIcon: true
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.returnFalse}>
        <label htmlFor='password'>Password</label>
          <div className="row align-center">
            <input type="password" name='password' onChange={this.trackInput} autoComplete='false'></input>
            {this.state.showIcon && this.makeIcon()}
          </div>
          <div className='red'>
            {this.state.showError && this.errorMessage()}
          </div>
      </form>
    );
  }
}
export default Input;
