import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label >
            Email
            <input type='email' name='email' value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <button>Sign Up</button>
      </form>
      </>
    );
  }
}

ReactDOM.render(<NewsletterForm />, document.querySelector('#root'));
