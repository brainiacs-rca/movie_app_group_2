import React ,{useState,useEffect}from 'react'
import './head.css'
import {FaSearch} from 'react-icons/fa'
const search_api="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const featured_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
function Head() {
    // const [movies, setMovies] = useState([]);
    const [show ,setShow]=useState(false)
    const [search,setSearch]=useState("")
    const [movies,setMovies]=useState([]);
    useEffect(() => {
        fetch(featured_api)
          .then((res) => res.json())
          .then((data) => {
            setMovies(data.results);
          });
      }, []);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(search){
    
          fetch(search_api + search)
          .then((res)=>res.json())
          .then((data)=>{
              console.log(data);
            setMovies(data.results);
          });
          setSearch('');
        }
      }
      const handleChange=(e)=>{
        setSearch(e.target.value);
    
      }
    
  return (
    <div>
        <div className="navbar">
            <h1 className='logo'>
                <span className='yellow'>M</span>
                <span className='whit'>V</span>
                <span className='yellow'>T</span>
            </h1>
            <nav>
                <ul>
                    <li id='one'>Home</li>
                    <li>Genre</li>
                    <li>Upcoming</li>
                    <li>More</li>
                    <li className={show? "srech"  :"search"}>
                        <i className='srch' onClick={()=>setShow(!show)}><FaSearch/></i>
                        
                    
                    </li>
                   
                </ul>
                <form onSubmit={handleSubmit}>
               {show && <input type="search" value={search} placeholder='search...' onChange={handleChange} />}
               </form>
            </nav>
           

        </div>
        
    </div>
  )
}

export default Head