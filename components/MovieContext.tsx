import { useState, createContext } from "react";


// add types for the context here 

type MovieContextType = {
    movies: any[];
    setMovies: React.Dispatch<React.SetStateAction<any[]>>
}



export const MovieContext = createContext<MovieContextType>({
        movies: [],
        setMovies: () => { }});

type props = {
    children: React.ReactNode
}


export const MovieProvider = (props:props) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Game of Thrones",
      rating: 8.9,
      year: 2011,
    },
    {
      id: 2,
      title: "Breaking Bad",
      rating: 9.1,
      year: 2008,
    },
    {
      id: 3,
      title: "The Walking Dead",
      rating: 8.7,
      year: 2010,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};