const { response } = require("express")
const db = require("../database/models")
module.exports ={
    list : (req,res) => {
       db.Movie.findAll()
        //console.log(pelis);
        .then((movies) => {
            return res.render("moviesList",{
                movies
            })
        })
        .catch(error => console.log(error))
        //res.render("moviesList")
    },
    new : (req,res) => {
        db.Movie.findAll({
            order:[
                ["release_date", "DESC"]
            ],
            limit: 5
        })
        .then(movies => {
            res.render("newestMovies",{movies})
        });
    },
    recommended : (req,res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte]:8}

            },
            order:[
                ["rating", "DESC"]
            ],
        })
        .then(movies => {
            res.render("recommendedMovies", {movies});
        });
        
    },
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id)
        .then(movie=>res.render ("moviesDetail",{movie}))
        .catch(error => console.log(error))
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
        //return res.send(req.body);
        // TODO

        const {title,release_date, rating, awards, genre_id, length} = req.body;

        db.Movie.create({
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
       let genres = db.Genre.findAll({
            order: ["name"], 
        });
        let movie = db.Movie.findByPk(req.params.id);

        Promise.all([genres, movie])
        .then(([genres, movie])=> {
            res.render("moviesEdit",{
                genres,
                Movie:movie,
                //moment:moment
            });

        }) 
        .catch(error =>console.log(error));
    },
    update: function (req,res) {
        // TODO
        db.Movie.update(
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
        db.Movie.findByPk(req.params.id)
        .then(movie => res.render("moviesDelete", {
            Movie:movie
        }))
        .catch(error =>console.log(error));
        // TODO
    },
    destroy: function (req, res) {
        // TODO
        db.Movie.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(result => {
            console.log(result)
            return res.redirect("/movies");
        })
        .catch(error =>console.log(error));

    }


}




//router.get('/movies', moviesController.list);
//router.get('/movies/new', moviesController.new);
//router.get('/movies/recommended', moviesController.recomended);
//router.get('/movies/detail/:id', moviesController.detail);