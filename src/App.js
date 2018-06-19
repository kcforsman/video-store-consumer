import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import CustomerList from './components/CustomerList';

class App extends Component {

  constructor() {
    super();

    this.state = {
      index: 0
    }
  }

  setComponent = (index) => {
    this.setState({index});
  }

  renderComponent = () => {
    if (this.state.index === 1) {
      return <h1><strong>Render:</strong> Search Bar</h1>;
    } else if (this.state.index === 2) {
      return <h1><strong>Render:</strong> Rental Library</h1>;
    } else if (this.state.index === 3) {
      return < CustomerList/>;
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
