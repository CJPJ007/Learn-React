import { useState } from "react";
import { getMovieByTitle } from "../helper/RestServiceCaller";
import { Movie } from "./Movie";

export const SearchedMovies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async (e) => {
    console.log("Inside getMovies");
    const response = await getMovieByTitle(e.target.value);
    setMovies(response);
  };

  return (
    <div className="bg-black text-white flex flex-col items-center space-y-6">
      <div className="flex justify-between items-center p-4 w-full">
        <p>Movie's App</p>
        <input
          type="text"
          placeholder="Type movie name"
          className="right-0 p-2 rounded-md border-black border-2 focus:outline-none text-black"
          onChange={getMovies}
        />
      </div>
      <hr className="w-3/4" />
      <div className="flex space-x-4 p-4 justify-between overflow-x-auto">
        {movies.length > 0 ? (
          movies.map((value, index) => {
            return <Movie {...value} buttonType="ADD" key={index}/>;
          })
        ) : (
          <div className="p-4">
            Please search movie using title to view data
          </div>
        )}
      </div>
    </div>
  );
};
