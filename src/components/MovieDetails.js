import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './MovieDetails.css';

class MovieDetails extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }

  render() {

    return (
      <dl>
      <dt> Title: {this.props.title}</dt>
      <dd>  {this.props.image_url}</dd>
      </dl>
    )
  }

}


export default MovieDetails;
