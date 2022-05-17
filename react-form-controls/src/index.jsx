import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// class NewsletterForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       email: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log('state:', this.state);
//   }

//   render() {
//     return (
//       <>
//       <form onSubmit={this.handleSubmit}>
//         <label >
//             Email
//             <input type='email' name='email' value={this.state.email} onChange={this.handleChange}></input>
//         </label>
//         <button>Sign Up</button>
//       </form>
//       </>
//     );
//   }
// }

function NewsletterForm() {
  const [email, setEmail] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    setEmail('');
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label >
          Email
          <input type='email' name='email' value={email} onChange={event => setEmail(event.target.value)}></input>
      </label>
      <button>Sign Up</button>
    </form>
    </>
  );
}

ReactDOM.render(<NewsletterForm />, document.querySelector('#root'));
