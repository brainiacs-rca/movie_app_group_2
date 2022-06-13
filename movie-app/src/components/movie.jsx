import React , {useState}from "react";
import "./movie.css";
import movieTrailer from "movie-trailer";
import Youtube from 'react-youtube';
import {IoIosAddCircle} from 'react-icons/io';
const img_api = "https://image.tmdb.org/t/p/w1280";
function Movie({ title, poster_path, overview, vote_average,movie }) {


  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("");

  const opts = {
  height:'390',
  width:'100%',
  playerVars:{
    
    autoplay:1,
 },

};

  const handleClick = (movie) =>{
    console.log("Movie function entered",movie)
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.title || "")
      .then((url) =>{
        const urlParams = new URLSearchParams( new URL(url).search );
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
    }

  };
  return (
    <div>
    <div className="both">
     
    <div className="image">
    
      <img src={img_api + poster_path} alt={title} onClick={()=>{handleClick(movie)}}  />
      
     <div className="bottom">
       <div className="btm1">{title}</div>
       <div className="btm2"></div>
       <div className="btm3">125 min</div>
       <div className="btm2"></div>
       <div className="btm5"><i><IoIosAddCircle/></i></div>


     </div>
    </div>
    </div>
    
     {trailerUrl && <Youtube  videoId={trailerUrl} opts={opts}/>
}
   
    </div>
  );
}

export default Movie;
