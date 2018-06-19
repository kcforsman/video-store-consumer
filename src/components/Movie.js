import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';
import MovieDetails from './MovieDetails';
import SelectButton from './SelectButton';

class Movie extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    external_id: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    reportMovie: PropTypes.func.isRequired
  }

  reportMovie = () => {
    this.props.reportMovie(this.props.index);
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
      <SelectButton reportSelection={ this.reportMovie } />
      </section>
    )
  }
}


export default Movie;
