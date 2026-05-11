import MovieItem from "./MovieItem";

function MovieList({ movies , onDeleteMovie, onToggle}) {

    
    return (
    <div>
        {movies.map((movie) => (
            <MovieItem 
            key={movie.id} 
            movie={movie} 
            onDelete={onDeleteMovie} 
            onToggle={onToggle} />
        ))}

    </div> 
    );
}

export default MovieList;