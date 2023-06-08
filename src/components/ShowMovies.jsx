import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieContext from "../storage/MovieContext";
import { deleteMovieById, getMovies } from "../service/movieService";
import UserContext from "../storage/UserContext";

const ShowMovies = () => {
  const { movies, updateMovies } = useContext(MovieContext);
  const { signedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies().then(({ data }) => updateMovies(data));
  }, []);

  const handleDelete = (id) => {
    if (!signedIn) {
      navigate("/signin");
    } else {
      const shouldDelete = window.confirm(
        "Da li ste sigurni da želite obrisati film?"
      );
      if (shouldDelete) {
        deleteMovieById(id);
        getMovies().then(({ data }) => updateMovies(data));
      }
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          className="table table-striped table-hover"
          style={{ width: "300px", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Duration</th>
              <th>Release Date</th>
              <th>Genre</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Show</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(movies)
              ? movies.map((movie, id) => (
                  <tr key={id}>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.release_date}</td>
                    <td>{movie.genre}</td>
                    <td>
                      <Link
                        className="btn btn-outline-warning"
                        to={`edit/${movie.id}`}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        type="delete"
                        onClick={() => handleDelete(movie.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link
                        className="btn btn-outline-success"
                        to={`/movies/${movie.id}`}
                      >
                        Show
                      </Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ShowMovies;
