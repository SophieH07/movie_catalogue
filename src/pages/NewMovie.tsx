import { useEffect, useState } from "react";
import CreateMovie from "../components/CreateMovie";

const NewMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <div>
      <CreateMovie setMovies={setMovies} />
    </div>
  );
};

export default NewMovie;
