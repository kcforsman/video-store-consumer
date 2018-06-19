import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import CustomerList from './components/CustomerList';
import RentalLibrary from './components/RentalLibrary';
import MovieSearch from './components/MovieSearch';


class App extends Component {

  constructor() {
    super();

    this.state = {
      index: 1
    }
  }

  setComponent = (index) => {
    this.setState({index});
  }

  renderComponent = () => {
    if (this.state.index === 1) {
      return < MovieSearch />;
    } else if (this.state.index === 2) {
      return < RentalLibrary />;
    } else if (this.state.index === 3) {
      return < CustomerList />;
    }
  }

  seeState = () => {
    console.log(this.state.index);
  }

  render() {
    return (
      <main>
        <header>
          <h1>NorthWest Movies</h1>
          <Navigation setComponent={ this.setComponent }/>
        </header>
        { this.renderComponent() }
        { this.seeState() }
      </main>
    );
  }
}

export default App;
