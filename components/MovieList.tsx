import { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = (props: any) => {

  
  
  const [movies, setMovies] = useContext(MovieContext);
  

  return (
    <>
      <h1>Movies</h1>
      <h2>{ movies.name }</h2>
      <ul>
        {movies.map((movie) => (
          <Movie key={movie.id} title={movie.title} rating={movie.rating} />
        ))}
      </ul>
    </>
  );
};
export default MovieList;
