import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerList from './components/CustomerList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerList />
      </div>
    );
  }
}

export default App;
