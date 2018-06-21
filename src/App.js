import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Navigation from './components/Navigation';
import CustomerList from './components/CustomerList';
import RentalLibrary from './components/RentalLibrary';
import MovieSearch from './components/MovieSearch';
import Checkout from './components/Checkout';
import Message from './components/Message';

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
    axios.post(
      `http://localhost:3000/rentals/${this.state.movie.title}/check-out`,
      {customer_id: this.state.customer.id}
    )
    .then((response) => {
      console.log(response.data)
      console.log(this.state.customer.id)
      console.log(this.state.movie.id)
      this.setState({
        message: "Successfully saved Rental",
        customer: null,
        movie: null
      })
    })
    .catch((error) => {
      this.setState({ message: error.message })
    });
  }

  renderMessage = () => {
    if (this.state.message) {
      return <Message message={ this.state.message } />;
    }
  }

  removeMessage = () => {
    if (this.state.message) {
      this.setState({message: undefined})
    }
  }

  seeState = () => {
    console.log(this.state);
  }

  render() {
    return (
      <main onClick={this.removeMessage}>
        <header>
          <section className="heading-container">
            <h1 className="app-heading">NorthWest Movies</h1>
            <Navigation setComponent={ this.setComponent }/>
          </section>
          <Checkout
            movie={ this.state.movie ? this.state.movie.title : ""}
            customer={ this.state.customer ? this.state.customer.name : ""}
            submitRental={ this.createRental }
          />
        </header>
        <div className="main-container">
          { this.renderMessage() }
          { this.renderComponent() }
        </div>
      </main>
    );
  }
}

export default App;
