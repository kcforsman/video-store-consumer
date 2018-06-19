import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import './RentalLibrary.css';
import Movie from './Movie';

class RentalLibrary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    }
  }

  componentDidMount = () => {
    console.log('Component did mount was called');

    axios.get('')
    .then( (response) => {
      console.log( response.data );
      this.setState({
        movies: response.data
      });
    } )
    .catch( (error) => {
      console.log("got to the error");
      console.log(error);
      this.setState({
        error: error.message
      });
    } );
  }

  renderMovieList = () => {
    console.log('Rendering Movie List');
    const componentList = this.state.movie.map((movie, index) => {
      return (
        <Movie
        key={index}
        title={movie.title}
        release_date={movie.release_date}
        inventory={movie.inventory}
        external_id={movie.external_id}
        />
      );
    });

    return componentList;
  }

  render() {
    return (
      <section>
      <header>
      {this.state.message ? this.state.message: ""  }
      </header>
      {this.renderMovieList()}
      </section>
    );
  }
}

RentalLibrary.propTypes = {
}

export default RentalLibrary;
