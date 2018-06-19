import React, { Component } from 'react';
import axios from 'axios';

import './CustomerList.css';
import Customer from './Customer';

class CustomerList extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      pages: 0
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/customers?p=1&n=200")
      .then((response) => {
        const customers = this.state.customers;
        console.log(response.data)
        response.data.forEach((customer) => {
          const newCustomer = {};
          newCustomer.id = customer.id;
          newCustomer.name = customer.name;
          newCustomer.phone = customer.phone;
          newCustomer.account_credit = customer.account_credit;
          customers.push(newCustomer);
        })

        this.setState({ customers })
      })
      .catch((error) => {
        this.setState({ message: error.message})
      });
  }

  seeState = () => {
    console.log(this.state.customers)
  }
  render() {
    const customerComponents = this.state.customers.map( (customer) => {
      return(
        <li key={ customer.id }>
          <Customer
            id={customer.id}
            name={customer.name}
            phone={customer.phone}
            credit={customer.account_credit}
          />
        </li>)
    });
    return (
       <section>
         <h3>Find Customer</h3>
         <ul>
           { customerComponents }
         </ul>
       </section>
    )
  }

}


export default CustomerList;