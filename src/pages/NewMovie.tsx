const NewMovie = () => {
  function onSubmit() {
    console.log("added");
  }

  return (
    <div>
      <form action="submit">
        <label htmlFor="movie_name">Movie name: </label>
        <input id="movie_name" type="text" placeholder="movie name" />
        <label htmlFor="length">Length: </label>
        <input id="length" type="text" placeholder="length" />
        <label htmlFor="movie_name">Movie name: </label>
        <input id="movie_name" type="text" placeholder="movie name" />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
};

export default NewMovie;
