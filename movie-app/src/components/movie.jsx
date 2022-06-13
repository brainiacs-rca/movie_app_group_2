import React from "react";
import "./movie.css";
import {IoIosAddCircle} from 'react-icons/io';
const img_api = "https://image.tmdb.org/t/p/w1280";
function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div>
    <div className="both">
     
    <div className="image">
    
      <img src={img_api + poster_path} alt={title} />
      
     <div className="bottom">
       <div className="btm1">{title}</div>
       <div className="btm2"></div>
       <div className="btm3">125 min</div>
       <div className="btm2"></div>
       <div className="btm5"><i><IoIosAddCircle/></i></div>


     </div>
    </div>
    </div>
   
    </div>
  );
}

export default Movie;
