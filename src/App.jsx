import { useState } from "react";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";

function App() {
const [movies, setMovies] = useState([]);

const deleteMovie = (id) => {
    const updatedMovies = 
    movies.filter(
        (movie) => movie.id !== id);

    setMovies(updatedMovies);
};

const addMovie = (title) => {
    const updatedMovies = [ ...movies, 
        { id: Math.random()*9999, title, watched: false } ];
    setMovies(updatedMovies);
};

const toggleWatched = (id) => {
    const updatedMovies = 
    movies.map((movie) => {
        if (movie.id === id) {
            return { ...movie, watched: !movie.watched };
        }
        return movie;
    });
    setMovies(updatedMovies);
};

  return (
    <div>
      <h1>Movie Tracker</h1>
      <MovieForm onAdd={addMovie} />
      <MovieList movies={movies} onDeleteMovie={deleteMovie} onToggle={toggleWatched}     />
    </div>
  );
}

export default App;