import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6ef753f5085db809031f6b6c3f55430f&language=en-US&page=1"
    );
    const data = await response.json();
    setPopularMovies(data.results);
    setFilteredMovies(data.results);
  };

  return (
    <div className="App">
      <h1 className="title">Top 20 popular movies</h1>
      <Filter
        popular={popularMovies}
        setFiltered={setFilteredMovies}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filteredMovies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
