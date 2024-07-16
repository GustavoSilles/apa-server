module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('posts',  {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imgURL:{
            type: Sequelize.STRING(1000)
        },
        descricao:{
            type: Sequelize.STRING
        },
        localizacao: {
            type: Sequelize.STRING
        },
        usuario:{
            type: Sequelize.STRING
        },
        photo:{
            type: Sequelize.STRING(1000)
        },
        denuncia:{
            type: Sequelize.BOOLEAN
        },
    },
    {
        timestamps: false,
    }   

)
    return Post
}