import "./App.css";
import { Favorites } from "./components/Favorites";
import { SearchedMovies } from "./components/SearchedMovies";
import { StateProvider } from "./helper/StateProvider";
import { initialState, reducer } from "./helper/reducer";

function App() {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <div className="App">
        <SearchedMovies></SearchedMovies>
        <Favorites></Favorites>
      </div>
    </StateProvider>
  );
}

export default App;
