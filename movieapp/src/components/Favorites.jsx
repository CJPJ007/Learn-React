import { Movie } from "./Movie";
import { UseStateValue } from "../helper/StateProvider";

export const Favorites = () => {
    
    const [{favouriteMovies},dispatch] = UseStateValue();


  return (
    <div className="bg-black text-white flex flex-col items-center space-y-6">
          <hr className="w-3/4" />
      <div className="flex justify-between items-center p-4 w-full">
        <p>Favourites</p>
      </div>
      <hr className="w-3/4" />
      <div className="flex space-x-4 p-4 justify-between">
        {favouriteMovies.length > 0 ? (
          favouriteMovies.map((value,index) => {
            return <Movie {...value} buttonType="REMOVE" key={index}/>;
          })
        ) : (''
        )}
      </div>
    </div>
  );
};
