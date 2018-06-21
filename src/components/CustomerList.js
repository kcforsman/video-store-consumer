import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Customer from './Customer';
import Message from './Message';

class CustomerList extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      pages: 0
    }
  }

  static propTypes = {
    getRentalSelection: PropTypes.func.isRequired
  }

  componentDidMount() {
    axios.get("http://localhost:3000/customers?p=1&n=200")
      .then((response) => {
        const customers = this.state.customers;
        response.data.forEach((customer) => {
          const newCustomer = {};
          newCustomer.id = customer.id;
          newCustomer.name = customer.name;
          newCustomer.phone = customer.phone;
          newCustomer.account_credit = customer.account_credit;
          customers.push(newCustomer);
        })

        this.setState({customers})
      })
      .catch((error) => {
        this.setState({ message: error.message})
      });
  }

  reportCustomerSelection = (index) => {
    const customerSelection = this.state.customers[index];

    this.props.getRentalSelection('customer', customerSelection);
  }

  renderMessage = () => {
    if (this.state.message) {
      return <Message message={ this.state.message } />
    }
  }

  componentWillUnmount() {
    this.setState({
      message: undefined
    })
  }

  seeState = () => {
    console.log(this.state.customers)
  }
  
  render() {
    const customerComponents = this.state.customers.map( (customer, index) => {
      return(
        <li key={ index }>
          <Customer
            index={index}
            id={customer.id}
            name={customer.name}
            phone={customer.phone}
            credit={customer.account_credit}
            reportCustomer={this.reportCustomerSelection}
          />
        </li>)
    });
    return (
       <section className="results-container">
         { this.renderMessage() }
         <h3>Find Customer</h3>
         <ul>
           { customerComponents }
         </ul>
       </section>
    )
  }

}


export default CustomerList;
