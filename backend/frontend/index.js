const submit = document.getElementById("submit");
const video = document.getElementsByTagName("video");
video.map(video => video.addEventListener('onplay',getMovie))
let videos = getMovies()
videos.then(res => {
  res .map(video => {
    console.log(video.public_id);
    document.getElementById('movies').innerHTML += `
    <video  width="400px" height="500px" poster="" controls>
        <source src=${video.secure_url}></source>
    </video>
`
  })
})
console.log(videos);
submit.addEventListener("click", async(e) => {
  e.preventDefault();
  const movie = document.getElementById("movie").files[0];
  console.log(movie);
  const reader = new FileReader();
  reader.readAsDataURL(movie);
  reader.onloadend = async () => {
    // console.log(reader.result);
    await fetch("http://localhost:4000/movie/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title:movie.name, video: reader.result }),
    })
  };
  // console.log(video);
});
async function getMovies(){
 const data = await fetch('http://localhost:4000/movie/movies',{
    method:"GET",
    headers:{
      'Content-Type':"application/json",
    },
  })
  .then(async res =>  res.json())
  .then(async data => {
    videos = data;
    return videos;
  })
  .catch(err => console.log(err))
  console.log(data.movies);
  return data.movies;
}

function getMovie(){
  
}


