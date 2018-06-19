import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerList from './components/CustomerList';
import RentalLibrary from './components/RentalLibrary';

class App extends Component {
  render() {
    return (
      <div className="App">
      <RentalLibrary />
      <CustomerList />

      </div>
    );
  }
}

export default App;
