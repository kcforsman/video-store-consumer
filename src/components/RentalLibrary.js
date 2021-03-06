import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';
import Message from './Message';

class RentalLibrary extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  static propTypes = {
    getRentalSelection: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/movies")
    .then((response) => {
      const movies = this.state.movies;
      response.data.forEach((movie) => {
        const newMovie = {};
        newMovie.id = movie.id;
        newMovie.title = movie.title;
        newMovie.image_url = movie.image_url;
        newMovie.release_date = movie.release_date;
        newMovie.external_id = movie.external_id;
        newMovie.overview = movie.overview;
        newMovie.available_inventory = movie.available_inventory;
        movies.push(newMovie);
      })

      this.setState({movies})
    })
    .catch((error) => {
      this.setState({ message: error.message})
    });
  }

  reportMovieSelection = (index) => {
    const movieSelection = this.state.movies[index];

    this.props.getRentalSelection('movie', movieSelection);
  }

  seeState = () => {
    console.log(this.state.movies.length)
  }

  renderMessage = () => {
    if (this.state.message) {
      return <Message message={ this.state.message } />
    }
  }

  componentWillUnmount() {
    this.setState({
      message: undefined
    })
  }

  render() {
    const movieComponents = this.state.movies.map( (movie, index) => {
      return(
        <li key={ movie.id }>
        <Movie
        index={index}
        id={movie.id}
        title={movie.title}
        image_url={movie.image_url}
        release_date={movie.release_date}
        external_id={movie.external_id}
        overview={movie.overview}
        available_inventory={movie.available_inventory}
        parent="RentalLibrary"
        reportMovie={this.reportMovieSelection}
        />
        </li>)
      });
      return (
        <section className="results-container">
          { this.renderMessage() }
          <h3>Find Movie</h3>
          <ul>
            { movieComponents }
          </ul>
        </section>
      )
    }

  }

  export default RentalLibrary;
