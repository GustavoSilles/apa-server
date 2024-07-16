module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users',  {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Sequelize.STRING,
            notNull: true,
            is:/^[a-zA-Z0-9\._]{4, 32}$/
        },
        username: {
            type: Sequelize.STRING,
            notNull: true,
            is:/^[a-zA-Z0-9\._]{4, 32}$/,
            unique:true
        },
        email:{
            type: Sequelize.STRING,
            notNull: true,
            is:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

            unique:true
        },
        password: {
            type: Sequelize.STRING,
            notNull:true
        },
        imgURL2:{
            type: Sequelize.STRING(1000)
        }
    },
    {
        timestamps: false,
    }   

)
    return User
}