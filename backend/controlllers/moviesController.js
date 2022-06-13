const { Movie } = require("../models/movie");
const cloudinary  = require("../utils/cloudinary");

module.exports.createMovie = () => {
     return async(req,res)  =>{ 
        const movie = new Movie({
            title:req.body.title,            
        })
        console.log(req.body.title);
        const uploadedMovie = await  cloudinary.uploader.upload_large(req.body.video,{
            folder:"movies",
            public_id:movie.title,
            use_filename:true,
            resource_type:'video',
            chunk_size:5000000
        })
        console.log(uploadedMovie);
        await Movie.save()
        res.send(uploadedMovie);
     }
}

module.exports.getMovies = () => {
return async(req,res) =>{
    console.log("Movies requested...");
    const movies = await  cloudinary.search.expression("uploaded_at>1w").execute();
    console.log(movies);
    res.json({movies:movies.resources})
} 
}

module.exports.getMovie = () => {
    return async(req,res) =>{
        const movie = await cloudinary.search.expression(req.params.url).execute();
        console.log("Got the movie:",movie);
        res.json(movie);
    }
}