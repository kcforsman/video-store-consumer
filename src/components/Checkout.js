import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Checkout.css';

class Checkout extends Component {
  static propTypes = {
    movie: PropTypes.string,
    customer: PropTypes.string,
    submitRental: PropTypes.func.isRequired
  }

  renderSelection = (field) => {
    return this.props[field];
  }

  submitForm = (event) => {
    event.preventDefault();
    if (this.props.movie || this.props.customer) {
      this.props.submitRental();
    }
  }

  render() {
    return (
       <section>
         <h3>~Rental Selection~</h3>
         <form onSubmit={ this.submitForm }>
         <label htmlFor="movie">Movie: </label>
         <p name="movie">{ this.renderSelection("movie") }</p>
         <label htmlFor="customer">Customer: </label>
         <p name="customer">{ this.renderSelection("customer") }</p>
         <input type="submit" value="Checkout Rental" />
         </form>
       </section>
    )
  }

}


export default Checkout;
