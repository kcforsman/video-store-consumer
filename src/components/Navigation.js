import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Navigation.css';

class Navigation extends Component {

  static propTypes = {
    setComponent: PropTypes.func.isRequired
  }

  selectComponent = (event) => {
    this.props.setComponent(event.target.value)
  }

  render() {
    return (
      <nav>
        <ul>
          <li onClick={ this.selectComponent } value="1">Movie Search</li>
          <li onClick={ this.selectComponent } value="2">Rental Library</li>
          <li onClick={ this.selectComponent } value="3">Customer List</li>
        </ul>
      </nav>
    )
  }

}


export default Navigation;
