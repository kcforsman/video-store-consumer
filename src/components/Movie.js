import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Movie.css';
import MovieDetails from './MovieDetails';

class Movie extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }

  render() {
    return (
      <section>
      <MovieDetails
      image_url={this.props.image_url}
      title={this.props.title}
      />
      </section>
    )
  }
}


export default Movie;
