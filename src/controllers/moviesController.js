const db = require("../database/models")
module.exports ={
    list : (req,res) => {
        res.render("moviesList")
    },
    new : (req,res) => {
        res.render("newestMovies")
    },
    recommended : (req,res) => {
        res.render("recommendedMovies")
    },
    detail : (req,res) => {
        res.render("genresDetails")
    }
}




//router.get('/movies', moviesController.list);
//router.get('/movies/new', moviesController.new);
//router.get('/movies/recommended', moviesController.recomended);
//router.get('/movies/detail/:id', moviesController.detail);