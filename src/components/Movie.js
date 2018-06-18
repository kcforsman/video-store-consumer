import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

class Movie extends Component {

    render() {
    console.log('Rendering');
    return (
      <article className="movie-summary">
      <p> {this.props.url}</p>
      <h3> {this.props.title}</h3>
      <p> {this.props.release_date}</p>
      <p> {this.props.inventory}</p>
      </article>
    )
  }
}


Movie.propTypes = {
  title: PropTypes.string.isRequired,
  // release_date: PropTypes.datetime.isRequired,
  inventory: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number.isRequired,
}

export default Movie;
