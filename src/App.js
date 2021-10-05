import React from 'react';
import './App.css';
import CardList from './components/card-list.component';
import SearchBox from './components/search-box.component';

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
      searchField: '',
    };
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredSet = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <SearchBox
          placeholder='search monsters'
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredSet} />
      </div>
    );
  }
}

export default App;
