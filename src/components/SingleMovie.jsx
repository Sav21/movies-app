import { useParams } from "react-router-dom";
import { getMovieById } from "../service/movieService";
import { useEffect, useState } from "react";

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getMovieById(id).then(({ data }) => {
        setMovie(data);
      });
    }
  }, [id]);

  //   const image = (brand) => {
  //     if (brand === "Audi") {
  //       return "data:image/jpeg;base64,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";
  //     }
  //     if (brand === "BMW") {
  //       return "data:image/jpeg;base64,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";
  //     }
  //     if (brand === "Mazda") {
  //       return "https://res.cloudinary.com/driveau/vehicles/showrooms/models/mazda-6.jpg";
  //     }
  //     if (brand === "Opel") {
  //       return "data:image/jpeg;base64,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";
  //     }
  //     if (brand === "Wolksvagen") {
  //       return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_e9SUK1IJGtlxn1Uow932c5KsHwHmCPCYQ&usqp=CAU";
  //     }
  //     if (brand === "Mercedes") {
  //       return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SsNumUlKCAkTAKe8a4kNEkaRx74zBWgMAQ&usqp=CAU";
  //     }
  //   };

  return (
    <div className="d-flex justify-content-center">
      <div className="card " style={{ width: "300px" }}>
        <div className="card-body">
          <img
            src={image(movie.title)}
            className="card-img-top"
            alt={`${movie.title} ${car.director}`}
          />
          <h2 className="card-title">
            {movie.title} {movie.director}
          </h2>
          <p className="card-text">Godina proizvodnje: {movie.release_date}</p>
          <p className="card-text">Maksimalna brzina: {movie.duration} km/h</p>
          <p className="card-text">Motor: {movie.genre}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleMovie;
