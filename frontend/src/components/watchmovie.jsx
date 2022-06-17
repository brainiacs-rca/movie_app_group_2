import { useState, useEffect } from "react";
// import logo from './logo.svg'
import "../App.css";
import movieTrailer from "movie-trailer";
import Youtube from 'react-youtube';
import Head from "../components/head";
import Body from "../components/body";
import Movie from "../components/movie";

  const featured_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const mv_api=""
function Watchmovie() {
  
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("");

  useEffect(() => {
    fetch(featured_api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  const opts = {
    height:'390',
    width:'100%',
    playerVars:{

      autoplay:1,
   },

  };

  const handleClick = (movie) =>{
    if(!trailerUrl){
      setTrailerUrl('');
    }else{
      console.log("Trailer Url",trailerUrl)
      movieTrailer(movie?.title || "")
      .then((url) =>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailer(urlParams.get("v"));

      })
      .catch((error) => console.log(error));
    }

  };

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
            movies.map((movie) => <Movie key={movie.id} {...movie} movie={movie}/>)}
        </div>
        <button className="btn" id="last">
          Load more
        </button>
      </div>
     {trailerUrl && <Youtube  videoId={trailerUrl} opts={opts}/> }

    </div>
  );
}

export default Watchmovie;
