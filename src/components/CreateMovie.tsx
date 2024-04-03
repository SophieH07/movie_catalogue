import { useState } from "react";

const CreateMovie = ({ setMovies }: { setMovies: Function }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState(Status.NOT_WATCHED);
  const [length, setLength] = useState(0);
  const [storage, setStorage] = useState(M_Storage.computer);

  function onSubmit() {
    const movie: Movie = {
      title: name,
      rating: rating,
      status: status,
      length: length,
      storage: storage,
    };

    setMovies((prevMovies: Movie[]) => [...prevMovies, movie]);
  }

  return (
    <form action="submit">
      <label htmlFor="movie_name">Movie name: </label>
      <input
        id="movie_name"
        type="text"
        placeholder="movie name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="rating">Rating: </label>
      <input
        id="rating"
        type="number"
        placeholder="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <label htmlFor="length">Length: </label>
      <input
        id="length"
        type="number"
        placeholder="length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <label htmlFor="status">Status: </label>
      <select
        name="status"
        id="status"
        onChange={(e) => setStatus(e.target.value)}
      >
        {Object.values(Status).map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <label htmlFor="storage">Storage: </label>
      <select
        name="storage"
        id="storage"
        onChange={(e) => setStorage(e.target.value)}
      >
        {Object.values(M_Storage).map((storage) => (
          <option key={storage} value={storage}>
            {storage}
          </option>
        ))}
      </select>
      <button onClick={onSubmit}>Add</button>
    </form>
  );
};

export default CreateMovie;
