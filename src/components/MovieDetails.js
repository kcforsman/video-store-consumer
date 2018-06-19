import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './MovieDetails.css';

class MovieDetails extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }

  render() {

    return (
      <dl>
      <dt> Title: {this.props.title}</dt>
      <img src={this.props.image_url} alt={this.props.image_url}/>
      <dd>  Release date: {this.props.release_date}</dd>
      </dl>
    )
  }

}


export default MovieDetails;
