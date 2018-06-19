import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './RentalLibrary.css';
import Movie from './Movie';

class RentalLibrary extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
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
        movies.push(newMovie);
      })

      this.setState({ movies })
    })
    .catch((error) => {
      this.setState({ message: error.message})
    });
  }

  seeState = () => {
    console.log(this.state.movies)
  }

  render() {
    const movieComponents = this.state.movies.map( (movie) => {
      return(
        <li key={ movie.id }>
        <Movie
        id={movie.id}
        title={movie.title}
        image_url={movie.image_url}
        release_date={movie.release_date}
        external_id={movie.external_id}
        overview={movie.overview}
        />
        </li>)
      });
      return (
        <section>
        <h3>Find Movie</h3>
        <ul>
        { movieComponents }
        </ul>
        </section>
      )
    }

  }

  export default RentalLibrary;
