const { where } = require('sequelize')
const db = require('../models')
const Post = db.posts

exports.findAll = async () => {
 try{
    const posts = await Post.findAll({
        attributes:['id','imgURL', 'descricao', 'localizacao', 'usuario', 'photo', 'denuncia']
    })
    return posts
 } catch (e) {
    throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
   
 }
}

// exports.findById = async(id) => {
//     try{
//         const post = await Post.findByPk(id, {
//             attributes:['id','imgURL', 'descricao', 'localizacao', 'photo', 'denuncia']
//         })
//         return post
//     } catch (e){
//         throw Error('Ocorreu um erro ao selecionar o Post. ERROR: ' + e.message)
//     }
// }
exports.create = async(imgURL, descricao, localizacao, usuario, photo) => {
    try{
        const post = await Post.create({
            imgURL: imgURL, descricao: descricao, localizacao: localizacao, usuario: usuario, photo: photo, denuncia: false})
        return post
    }catch (e){
        throw Error('Erro ao criar post:  ' + ' ERROR:  ' + e.message)
    }
}
exports.delete = async (id) => {
    try {
        await Post.destroy({
            where:{id: id}
        })
    } catch (e){
        throw Error('Ocorreu um erro ao deletar Post. ERROR: ' + e.message)
    }
}
exports.update = async (id, denuncia) => {
    try{
        await Post.update(
            {denuncia: denuncia},
            {where:{id: id}})
    } catch (e){
        throw Error('Erro ao selecionar o usuario: ' + post + ' ERROR: ' + e.message)
    }
}
exports.report = async () => {
    try{
        const posts = await Post.findAll({
            attributes:['id','imgURL', 'descricao', 'localizacao', 'usuario', 'photo', 'denuncia'],
            where:{denuncia: true}
        })
        return posts
     } catch (e) {
        throw Error('Ocorreu um erro ao denuncias os posts. ERROR: ' + e.message)
       
     }
    }