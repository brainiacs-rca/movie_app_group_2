const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30,
        
    }, 
    Length:{
        type:String,
    },
    genre:{
        type:String,
    },
    likes:{
    type:Number,
    default:0,
    },
    releaseDate:{
        type:Date,
        required:true,
    }
})

module.exports.Movie = mongoose.model('movies', movieSchema);
