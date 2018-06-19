import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MovieResults.css';
import Movie from './Movie';

class MovieResults extends Component {

  renderMovieResults = () => {
    const resultList = this.props.results.map( (result) => {
      return(
        <li key={ result.id }>
        <Movie
        id={result.id}
        title={result.title}
        image_url={result.image_url}
        release_date={result.release_date}
        external_id={result.external_id}
        overview={result.overview}
        />
        </li>)
      });
      return resultList;
    }

    render() {

      return (
        <section>
        <ul>
        { this.renderMovieResults() }
        </ul>
        </section>
      )
    }
  }

  MovieResults.propTypes = {
    results: PropTypes.array.isRequired,
  };


  export default MovieResults;
