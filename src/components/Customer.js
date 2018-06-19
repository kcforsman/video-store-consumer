import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Customer.css';
import CustomerDetails from './CustomerDetails';

class Customer extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
  }
  
  render() {
    return (
      <section>
       <CustomerDetails
         name={this.props.name}
         phone={this.props.phone}
         credit={this.props.account_credit}
        />
      </section>
    )
  }

}


export default Customer;
