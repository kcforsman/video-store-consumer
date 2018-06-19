import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

class SearchBar extends Component {
  constructor () {
    super();

    this.state = {
      searchTerm:'',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  valid = () => {
    return this.state.text.length > 0
  }

  clearForm = () => {
    this.setState({
      searchTerm:'',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();


    this.props.searchCallback(this.state.searchTerm);
    this.clearForm();

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
      <label htmlFor="searchTerm"  >Search: </label>
      <input
      name="searchTerm"
      value={this.state.searchTerm}
      onChange={this.onFieldChange}
      type="text"
      placeholder="Search..."
      />
      <input type="submit" value="Search Movie DataBase"/>
      </form>
    )
  }

}

SearchBar.propTypes = {
  searchCallback: PropTypes.func.isRequired,
};


export default SearchBar;
