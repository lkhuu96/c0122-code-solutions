import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    const records = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await records.json();
    await this.setState({
      users: result,
      isLoading: false
    })
      .catch(err => console.error(err));
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
