import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";


const App = () => {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6d394752`

    const res = await fetch(url)
    const resJson = await res.json()

    if (resJson.Search) {
      setMovies(resJson.Search)
    }

  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <>
      <div>
        <MovieListHeading heading='Movies' />
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

      </div>
      <div className="movie-container">
        <div className="movie-list">
          <MovieList
            movies={movies}
          />
        </div>
      </div>
    </>
  );
}

export default App;