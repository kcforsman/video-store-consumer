import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

class SearchBar extends Component {

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..."/>
        <input type="submit" value="Search DataBase"/>
      </form>
    )
  }

}


export default SearchBar;
