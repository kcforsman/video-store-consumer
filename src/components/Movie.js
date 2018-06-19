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
    external_id: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }

  render() {
    return (
      <section>
      <MovieDetails
      image_url={this.props.image_url}
      title={this.props.title}
      release_date={this.props.release_date}
      external_id={this.props.external_id}
      />
      </section>
    )
  }
}


export default Movie;
