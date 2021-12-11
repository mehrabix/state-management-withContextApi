import { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {

  const [movies, setMovies] = useContext<any>(MovieContext);




  return (
    <>
      <div className="flex justify-around h-32 items-center w-full mx-auto font-bold bg-slate-800 text-white">
        <h3>Dev Ed</h3>
        <p>List Of movies: {movies.length }</p>
      </div>
    </>
  );
};
export default Nav;
