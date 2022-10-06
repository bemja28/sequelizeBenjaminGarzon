module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique:true,
            defaultValue : 1
        },
        // active:{
        //     type:dataTypes.TINYINT(1),
        //     allowNull: false,
        //     defaultValue : 1
        // }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
        //underscored:true
    };
    const Genre = sequelize.define(alias, cols, config)

    return Genre
}