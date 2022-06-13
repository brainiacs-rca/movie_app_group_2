import { useState, useEffect } from "react";
// import logo from './logo.svg'
import "./App.css";
import Head from "./components/head";
import Body from "./components/body";
import Movie from "./components/movie";
  const featured_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const mv_api=""
function App() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(featured_api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="App">
      <Head/>
      <Body/>
      <div className="both">
        <div className="lines">
          <div className="line"></div>
          <div className="line2"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="btns">
          <button className="btn">Movies</button>
          <button className="btn">Shows</button>
        </div>

        <div className="main">
          {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
        <button className="btn" id="last">
          Load more
        </button>
      </div>
    </div>
  );
}

export default App;
