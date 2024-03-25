export const initialState = {
    favouriteMovies:localStorage.getItem("favouriteMovies")?JSON.parse(localStorage.getItem("favouriteMovies")):[]
}

export const reducer = (state,action)=>{
    switch(action.type){
        case "ADD_TO_FAVOURITES":
            return {
                ...state,
                favouriteMovies:addToFavorites(action.item)
            }
        case "REMOVE_FROM_FAVOURITES":
            return {
                ...state,
                favouriteMovies:removeFromFavorites(action.item)
            }
        default:
            return;
    }
}

const addToFavorites = ({Title, Year, imdbID, Type, Poster})=>{
    console.log("Inside addToFavorites : ",imdbID," ",Title);
    let favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovies"));
    let alreadyExist = false;
    if (favouriteMovies) {
      favouriteMovies.forEach((element) => {
        if (element.imdbID === imdbID) {
          alert("Movie already present in favourites");
          alreadyExist = true;
        }
      });
      if (!alreadyExist) {
        favouriteMovies.push({ Title, Year, imdbID, Type, Poster });
        localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
      }
    } else {
      favouriteMovies = []
      favouriteMovies.push({ Title, Year, imdbID, Type, Poster });
      localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
    }
    return favouriteMovies;
}

const removeFromFavorites = (imdbID)=>{
    let favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovies"));
    if (favouriteMovies) {
      favouriteMovies.forEach((element,index) => {
        if (element.imdbID === imdbID) {
            favouriteMovies.splice(index,1);
            localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
            return;
        }
      });
    }
    return favouriteMovies;
}