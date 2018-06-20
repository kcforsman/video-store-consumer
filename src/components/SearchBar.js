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
      <form onSubmit={this.onFormSubmit} className="search-form">
        <input
          className="search-input"
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.onFieldChange}
          type="text"
          placeholder="Enter Search Terms..."
        />
        <input type="submit" value="Search Movie Database" className="button"/>
      </form>
    )
  }

}

SearchBar.propTypes = {
  searchCallback: PropTypes.func.isRequired,
};


export default SearchBar;
