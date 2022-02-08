import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/cardlist/cardlist';
import {SearchBox} from './components/searchbox/searchbox'


class App extends Component {

  constructor(){
    super()

    this.state = {
      criminals: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(criminals => this.setState({criminals}))
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };



  render(){

    const {criminals, searchField} = this.state
    const filteredCriminals = criminals.filter(criminal => 
      criminal.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className='App'>
        <SearchBox onSearchChange={this.onSearchChange} />
        <h1 className='bigalow'>Criminals in Your Area</h1>
        <CardList criminals={filteredCriminals} />
      </div>
    )
    
  }
}



export default App;
