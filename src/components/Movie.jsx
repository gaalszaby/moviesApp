import React from "react";
import { motion } from "framer-motion";

const Movie = (props) => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 0.95 }}
      layout
    >
      <a
        href={"https://www.themoviedb.org/movie/" + props.movie.id}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path}
          alt={props.movie.title}
          className="movie-img"
        />
      </a>
      <h2 className="movie-title">
        {props.movie.title.length > 29
          ? props.movie.title.substr(0, 30) + "..."
          : props.movie.title}
      </h2>
    </motion.div>
  );
};

export default Movie;
