import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShowMovies from "./components/ShowMovies";
import SignIn from "./register/SignIn";
import SignUp from "./register/SignUp";
import { useContext, useEffect } from "react";
import MovieContext from "./storage/MovieContext";
import UserContext from "./storage/UserContext";
import { getMovies } from "./service/movieService";

function App() {
  const { updateMovie } = useContext(MovieContext);
  const { signedIn } = useContext(UserContext);
  useEffect(() => {
    if (signedIn) {
      getMovies().then(({ data }) => updateMovie(data));
    }
  }, [signedIn]);
  return (
    <Routes>
      <Route index path="/movies" element={<ShowMovies />}></Route>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/register" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
