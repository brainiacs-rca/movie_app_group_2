const express = require('express');
const { createMovie, getMovies, getMovie } = require('../controlllers/moviesController');
const router = express.Router();

router.post('/upload',createMovie());
router.get('/movies',getMovies());
router.get('/movie/:url',getMovie());
module.exports.Mrouter = router;