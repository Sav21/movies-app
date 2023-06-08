import { createContext } from "react";

const MovieContext = createContext({
  movies: [],
  updateMovie: () => {},
  addMovie: () => {},
});

export default MovieContext;
