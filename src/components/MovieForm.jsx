
import { useState } from 'react';

function MovieForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      onAdd(title);
      setTitle('');
    
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie title"
          value={title}
          onChange={handleChange}
        />
        <button>Add Movie</button>
      </form>
    </div>
  );
}

export default MovieForm;