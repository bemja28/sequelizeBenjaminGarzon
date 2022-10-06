module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
            defaultValue : null
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull:true,
            defaultValue : null
        }
    };
    let config = {
        tableName: 'actors',
        timestamps: true,
        underscored:true
    };
    const Actor = sequelize.define(alias, cols, config)

    return Actor
}