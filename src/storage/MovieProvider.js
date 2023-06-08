import { useState, useEffect } from "react";
import MovieContext from "./MovieContext";
import { addMovie, getMovies } from "../service/movieService";

const MovieProvider = ({ children }) => {
  const [movieState, setMovieState] = useState([]);

  const postNewMovie = (movie) => {
    const existingMovie = movieState.find((m) => m.title === movie.title);
    if (existingMovie) {
      return;
    }
    addMovie(movie).then(({ data }) => {
      setMovieState((prevState) => [...prevState, data]);
    });
  };

  const movieContext = {
    movies: movieState,
    updateMovie: setMovieState,
    addMovie: postNewMovie,
  };
  return (
    <MovieContext.Provider value={movieContext}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
