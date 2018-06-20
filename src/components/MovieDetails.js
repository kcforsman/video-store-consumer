import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MovieDetails.css';

class MovieDetails extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }

  render() {

    return (
      <section className="movie-details-container">
        <div className="movie-details-image">
          <img src={this.props.image_url} alt={this.props.image_url}/>
        </div>
        <div className="movie-details-content">
          <p><strong>Title:</strong><br /> {this.props.title}</p>
          <p><strong>Release Date: </strong><br />{this.props.release_date}</p>
        </div>
      </section>
    )
  }

}


export default MovieDetails;
