import MovieForm from "../../components/MovieForm/MovieForm.tsx";
import MovieCard from "../../components/MovieCard/MovieCard.tsx";
import { useState } from "react";
import { IMovie } from "../../types";

const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const addNewMovie = (titleOfMovie) => {
    setMovies([...movies, { id: String(new Date()), title: titleOfMovie }]);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const editMovie = (id, newTitle) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, title: newTitle } : movie,
      ),
    );
  };

  return (
    <div className="d-flex flex-column">
      <p>Enter title of movie</p>
      <MovieForm addNewMovie={addNewMovie} />
      <p>To watch list:</p>
      {movies.map((movie) => {
        return (
          movies && (
            <MovieCard
              key={movie.id}
              movie={movie}
              remove={removeMovie}
              edit={editMovie}
            />
          )
        );
      })}
    </div>
  );
};

export default Movies;
