const { response } = require("express")
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
    },

    add: function (req, res) {
        // TODO   
        db.Genre.findAll({
             order:["name"]  
        })
        .then(genres => res.render("moviesAdd",{
            genres
        }))
        .catch(error =>console.log(error));
        
    },
    create: function (req, res) {
        // TODO
        const {title,release_date, rating, awards, genre_id, length} = req.body;

        db.movie.create({
            ...req.body,
            title : title.trim(),
        })
        .then(movie => {
            console.log(movie)
            return res.redirect("/movies/detail/" + movie.id);
        })
        .catch(error =>console.log(error));
    },
    edit: function(req, res) {
        // TODO
        db.Genre.findAll({
            // order:  
        })
        .then(genres => res.render("moviesEdit",{
            genres
        }))
        .catch(error =>console.log(error));
    },
    update: function (req,res) {
        // TODO
        db.Mivie.update(
            {
                ...req.body,
                title:req.body.title.trim()
            },
            {
                where : {id:req.params.id}
            }
        )
        .then(response => {
            console.log(response);
            return res.redirect("/movies/detail/" + req.params.id)
        }
            
        )
        .catch(error =>console.log(error));
    },
    delete: function (req, res) {
        db.Movie.findByPk
        // TODO
    },
    destroy: function (req, res) {
        // TODO
    }


}




//router.get('/movies', moviesController.list);
//router.get('/movies/new', moviesController.new);
//router.get('/movies/recommended', moviesController.recomended);
//router.get('/movies/detail/:id', moviesController.detail);