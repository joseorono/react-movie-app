
import { Form } from "react-router-dom";

export default function MovieDetails() {
  const movie = {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator.",
    release_date: "2001-12-18",
    vote_average: 8.3,
    runtime: 178,
    poster_path: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    
  }

  return (
    <div className="movie-details">
    <h3>{movie.title}</h3>
    <p>{movie.overview}</p>
    <p>Fecha de lanzamiento: {movie.release_date}</p>
    <p>Puntuación: {movie.vote_average}</p>
    <p>Duración: {movie.runtime} minutos</p>
    {/* Agrega más detalles aquí según tus necesidades */}
  </div>
  );
}



