import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Navigation from './components/Navigation';
import CustomerList from './components/CustomerList';
import RentalLibrary from './components/RentalLibrary';
import MovieSearch from './components/MovieSearch';
import Checkout from './components/Checkout';


class App extends Component {

  constructor() {
    super();

    this.state = {
      index: 1,
      movie: null,
      customer: null
    }
  }

  setComponent = (index) => {
    this.setState({index});
  }

  setRentalSelection = (field, value) => {
    const newState = {};
    newState[field] =  value;
    this.setState(newState);
  }

  renderComponent = () => {
    if (this.state.index === 1) {
      return < MovieSearch />;
    } else if (this.state.index === 2) {
      return < RentalLibrary getRentalSelection={ this.setRentalSelection }/>;
    } else if (this.state.index === 3) {
      return < CustomerList getRentalSelection={ this.setRentalSelection }/>;
    }
  }

  createRental = () => {
    console.log(this.state.movie.title, this.state.customer.id)
    axios.post(`http://localhost:3000/rentals/${this.state.movie.title}/check-out`,
      {customer_id: this.state.customer.id})
    .then((response) => {
      console.log(response.data)
      console.log("Successfully saved Rental")
      // this.setState({ customers })
    })
    .catch((error) => {
      this.setState({ message: error.message})
    });
  }

  seeState = () => {
    console.log(this.state);
  }

  render() {
    return (
      <main>
        <header>
          <Checkout
            movie={ this.state.movie ? this.state.movie.title : ""}
            customer={ this.state.customer ? this.state.customer.name : ""}
            submitRental={ this.createRental }
          />
          <h1>NorthWest Movies</h1>
          <Navigation setComponent={ this.setComponent }/>
        </header>
        { this.renderComponent() }
      </main>
    );
  }
}

export default App;
