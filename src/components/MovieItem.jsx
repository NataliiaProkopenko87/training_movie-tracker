function MovieItem({movie, onDelete, onToggle}) {

    const onDeleteClick = () => {
        onDelete(movie.id);
    };

    const onToggleClick = () => {
        onToggle(movie.id);
    };

    return (<div className={`movie-item ${movie.watched ? 'watched' : ''}`}>
  <h3>{movie.title}</h3>
  <div className="actions">
    <button className="delete" onClick={onDeleteClick}>Delete</button>
    <button className="toggle" onClick={onToggleClick}>
      {movie.watched ? "Watched" : "Watch"}
    </button>
  </div>
</div>);
}

export default MovieItem;