import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Customer.css';
import CustomerDetails from './CustomerDetails';
import SelectButton from './SelectButton';


class Customer extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    credit: PropTypes.number,
    reportCustomer: PropTypes.func.isRequired
  }

  reportCustomer = () => {
    this.props.reportCustomer(this.props.index);
  }

  render() {
    return (
      <section>
       <CustomerDetails
         name={this.props.name}
         phone={this.props.phone}
         credit={this.props.account_credit}
        />
        <SelectButton reportSelection={ this.reportCustomer } />
      </section>
    )
  }

}


export default Customer;
