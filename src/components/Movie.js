import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import MovieDetails from './MovieDetails';
import SelectButton from './SelectButton';

class Movie extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    external_id: PropTypes.number.isRequired,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    available_inventory: PropTypes.number,
    reportMovie: PropTypes.func.isRequired,
    parent: PropTypes.string
  }

  reportMovie = () => {
    this.props.reportMovie(this.props.index);
  }

  addMovie = () => {
    const movieData = {
      title: this.props.title,
      release_date: this.props.release_date,
      image_url: this.props.image_url,
      external_id: this.props.external_id,
      overview: this.props.overview,
      inventory: 1
    }

    console.log(movieData);


    axios.post(`http://localhost:3000/movies/`, movieData)
    .then((response) => {
      console.log(`Added ${response.data.title}`);
      console.log(response);
    })
    .catch((error) => {
      console.log(`${this.props.title} did not add to rental library`);
      console.log(error.message);
    });
  }

  renderButton = () => {
    if (this.props.parent === "RentalLibrary" && this.props.available_inventory) {
      return <SelectButton reportSelection={ this.reportMovie } field="Select Movie"/>;
    } else if (this.props.parent === "RentalLibrary") {
      return <SelectButton reportSelection={ () => {} } field="Movie Unavailable"/>
    } else {
      return <SelectButton reportSelection={ this.addMovie } field="Add to Library"/>;
    }
  };

  render() {
    return (
      <section className="list-item-container">
      <MovieDetails
      image_url={this.props.image_url}
      title={this.props.title}
      release_date={this.props.release_date}
      external_id={this.props.external_id}
      />
      { this.renderButton() }
      </section>
    )
  }
}


export default Movie;
