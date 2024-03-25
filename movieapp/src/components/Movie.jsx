import { UseStateValue } from "../helper/StateProvider";

export const Movie = ({ Title, Year, imdbID, Type, Poster, buttonType }) => {
  const [state, dispatch] = UseStateValue();
  const addToFavourites = (e) => {
    e.preventDefault();
    dispatch({
        type:"ADD_TO_FAVOURITES",
        item:{ Title, Year, imdbID, Type, Poster }
    });
  };

  const removeFromFavourites = () => {
    dispatch({
        type:"REMOVE_FROM_FAVOURITES",
        item: imdbID
    });
  };

  return (
    <div
      key={imdbID}
      className="flex flex-col items-center text-xs space-y-4 w-1/12"
    >
      <img src={Poster} alt={Title} className="h-64" />
      <p>
        {Title} : Release Year : {Year}
      </p>
      {
        buttonType==="ADD"?(
      <button
        className="bg-white rounded-md text-black p-1"
        onClick={addToFavourites}
      >
        Add to favorites
      </button>):
      (
        <button
          className="bg-white rounded-md text-black p-1"
          onClick={removeFromFavourites}
        >
          Remove from favorites
        </button>)
      }
    </div>
  );
};
