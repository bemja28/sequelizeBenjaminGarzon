module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull : false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull : true
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            //allowNull : true,
            defaultValue : null
        },
        genre_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            //allowNull : true,
            defaultValue : null
        }


    };
    let config = {
        tableName: 'movies',
        timestamps: true,
        underscored:true
    };
    const Movie = sequelize.define(alias, cols, config)

    return Movie
}