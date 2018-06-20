import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CustomerDetails.css';

class CustomerDetails extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    credit: PropTypes.number,
  }

  displayCredit = () => {
    if (this.props.credit) {
      return <dd><strong>Account Credit:</strong> {this.props.credit}</dd>
    }

  }

  render() {

    return (
      <section>
        <p><strong>Name:</strong> { this.props.name }</p>
        <p><strong>Phone Number:</strong> {this.props.phone}</p>
        { this.displayCredit() }
      </section>
    )
  }

}


export default CustomerDetails;
