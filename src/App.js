import './App.css';

import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange(e) {
    this.setState({ searchField : e.target.value })
  }

  // Arrow function automatically bind the context where it's defined
  handleChange2 = e => {
    this.setState({ searchField : e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange2} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;