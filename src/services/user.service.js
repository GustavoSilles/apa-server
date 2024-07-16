//const { PASSWORD } = require('../config/db.config')
const db = require('../models')
const User = db.users

exports.findAll = async () => {
 try{
    const users = await User.findAll({
        attributes:['id','name','username', 'email', 'imgURL2']
    })
    return users
 } catch (e) {
    throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
 }
}

exports.findById = async(id) => {
    try{
        const user = await User.findByPk(id, {
            attributes:['id','username','name', 'email', 'imgURL2']
        })
        return user
    } catch (e){
        throw Error('Ocorreu um erro ao selecionar o usuario. ERROR: ' + e.message)
    }
}
exports.create = async(username, name, email, password, imgURL2) => {
    try{
        const user = await User.create({
            username: username,name: name, email: email, password: password, imgURL2: imgURL2})
        return user
    }catch (e){
        throw Error('Erro ao inserir o usuario:  ' + username + ' ERROR:  ' + e.message)
    }
}
exports.update = async (id, username, name, email, password, imgURL2) => {
    try{
        await User.update(
            {username: username, name: name, email: email, password: password, imgURL2: imgURL2},
            {where:{id: id}})
    } catch (e){
        throw Error('Erro ao selecionar o usuario: ' + username + ' ERROR: ' + e.message)
    }
}
exports.delete = async (id) => {
    try {
        await User.destroy({
            where:{id: id}
        })
    } catch (e){
        throw Error('Ocorreu um erro ao deletar o usuario. ERROR: ' + e.message)
    }
}
exports.login = async (email, password) => {
    try{
        const users = await User.findOne(
            {where:{email: email, password: password}},
          
        )
        return users
    } catch (e){
        throw Error('login Error ' + e.message)
    }
    

}