import React from 'react';
import './App.css';
import CardList from './components/card-list.component';

class App extends React.Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
