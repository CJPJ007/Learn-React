import axios from "axios";


export async function getMovieByTitle(title){
    try {
        console.log("Inside getMovieByTitle");
        const response = await axios.get("http://www.omdbapi.com?apikey=236b74a&s="+title);
        console.log("Moive data ",response.data);
        if(response.data.Search)
            return response.data.Search;
    } catch (error) {
        console.log("Error in getMovieByTitle",error);
    }
    return [];
}