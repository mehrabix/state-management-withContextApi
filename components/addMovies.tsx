import { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovies = () => {
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");

  // add usecontext with type valdiation
    const [movies, setMovies] = useContext(MovieContext);
    

  const updateID = (e: any) => {
    setID(e.target.value);
  };
  const updateTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const updateRating = (e: any) => {
    setRating(e.target.value);
  };
  const updateYear = (e: any) => {
    setYear(e.target.value);
  };
  const addMovies = (e: any) => {
     
    e.preventDefault();
    if (id.trim() === "" || title.trim() === "" || rating.trim() === "" || year.trim() === "") {
      alert("Please enter all the fields");
    } else {
      setMovies(movies.concat({ id, title, rating, year }));
      setID("");
      setTitle("");
      setRating("");
      setYear("");
    }
  };

  return (
    <div>
      <h1>Add Movies</h1>
      <form onSubmit={addMovies}>
        <input
          onChange={updateID}
          className="border-2 p-2 mx-2 border-orange-600 rounded-lg"
          type="text"
          placeholder="Id"
          value={id}
        />
        <input
          onChange={updateTitle}
          className="border-2 p-2 mx-2 border-orange-600 rounded-lg"
          type="text"
          placeholder="Title"
          value={title}
        />
        <input
          onChange={updateRating}
          className="border-2 p-2 mx-2 border-orange-600 rounded-lg"
          type="text"
          placeholder="Rating"
          value={rating}
        />
        <input
          onChange={updateYear}
          className="border-2 p-2 mx-2 border-orange-600 rounded-lg"
          type="text"
          placeholder="Year"
          value={year}
        />
        <button className="bg-green-400 px-3 py-2 rounded-lg border-green-800 border-4">
          submit
        </button>
      </form>
    </div>
  );
};
export default AddMovies;
