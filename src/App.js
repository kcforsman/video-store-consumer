import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import axios from 'axios';

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
      <Router>
        <main>
          <header>
            <section className="heading-container">
              <h1 className="app-heading">
                <Link to="/" className="route-link">NorthWest Movies</Link>
              </h1>
              <nav>
                <ul className="link-container">
                  <li>
                    <Link to="/search" className="route-link">Movie Search</Link>
                  </li>
                  <li>
                    <Link to="/library" className="route-link">Rental Library</Link>
                  </li>
                  <li>
                    <Link to="/customers" className="route-link">Customer List</Link>
                  </li>
                </ul>
              </nav>
            </section>
            <Checkout
              movie={ this.state.movie ? this.state.movie.title : ""}
              customer={ this.state.customer ? this.state.customer.name : ""}
              submitRental={ this.createRental }
            />
          </header>
          <div className="main-container">
            <Route exact path="/" component={MovieSearch} />
            <Route path="/search" component={MovieSearch} />
            <Route path="/library" component={RentalLibrary} />
            <Route path="/customers" component={CustomerList} />
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
