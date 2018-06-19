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
      <dl>
        <dt><strong>Name:</strong> { this.props.name }</dt>
        <dd><strong>Phone Number:</strong> {this.props.phone}</dd>
        { this.displayCredit() }
      </dl>
    )
  }

}


export default CustomerDetails;
