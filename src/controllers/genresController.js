
const db = require("../database/models")
module.exports ={
    list : (req,res) => {
        res.render("genresList")
    },

    detail : (req,res) => {
        res.render("genresDetails")
    }
}

//router.get('/genres', genresController.list);
//router.get('/genres/detail/:id', genresController.detail);