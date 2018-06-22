import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';

class MovieResults extends Component {

  renderMovieResults = () => {
    const resultList = this.props.results.map( (result, index) => {
      return(
        <li key={ index }>
          <Movie
            index={index}
            title={result.title}
            image_url={result.image_url}
            release_date={result.release_date}
            external_id={result.external_id}
            overview={result.overview}
            reportMovie={() => {}}
          />
        </li>)
      });
      return resultList;
    }

    render() {

      return (
        <section className="results-container">
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
