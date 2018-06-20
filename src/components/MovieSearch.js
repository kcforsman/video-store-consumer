import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar'
import MovieResults from './MovieResults'
import Message from './Message'

class MovieSearch extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
    }
  }

  searchMovies = (searchTerm) => {
    axios.get(`http://localhost:3000/movies?query=${searchTerm}`)
    .then((response) => {
      const results = this.state.results;
      response.data.forEach((result) => {
        const searchResult = {};
        searchResult.id = result.id;
        searchResult.title = result.title;
        searchResult.image_url = result.image_url;
        searchResult.release_date = result.release_date;
        searchResult.external_id = result.external_id;
        searchResult.overview = result.overview;
        results.push(searchResult);
      })
      this.setState({
        results,
        message: `Found ${results.length} for ${searchTerm}`
      })
    })
    .catch((error) => {
      this.setState({ message: error.message});
    });
  }

  componentWillUnmount() {
    this.setState({
      results: []
    })
  }

  renderResults = () => {
    if (this.state.results.length !== 0) {
      return <MovieResults results={this.state.results} />;
    }
  }

  renderMessage = () => {
    if (this.state.message) {
      return <Message message={ this.state.message } />
    }
  }

  render() {
    return (
      <div>
        { this.renderMessage() }
        <SearchBar searchCallback = {this.searchMovies} />
        { this.renderResults() }
      </div>
    )
  }

}


export default MovieSearch;
