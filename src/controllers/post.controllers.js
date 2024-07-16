const { request } = require('express')
const { posts } = require('../models')
const postService = require('../services/post.service')

exports.findAll = async (request, response) =>{
    try{
        const posts = await postService.findAll()
            return response.status(200).json({
                status: 200,
                data: posts,
                message: 'Posts listados com sucesso'
            })
    }catch (e){
        response.send(400).json({
            status:400,
            message: e
        })
    }
}
// exports.findById = async (request, response) => {
//     try{
//         const id = parseInt(request.params.id)
//         const post = await postService.findById(id)
//         response.status(200).json({
//             status: 200,
//             data: post,
//             message: 'Post selecionado com sucesso'
//         })
//     } catch (e){
//         response.send(400).json({
//             status:400,
//             message: e
//         })
//     }
// }
exports.create = async (request, response) => {
    try{
        const {imgURL, descricao, localizacao, usuario, photo, denuncia } = request.body
        const post = await postService.create(imgURL, descricao, localizacao, usuario, photo, denuncia)
        response.status(201).send({
            message: "post criado com sucesso!",
            body:{
                post: post
            }
        })
    }catch (e) {
        return response.status(400).json({
            status: 400,
            message: "Erro ao criar post. Error: " + e.message
        })
    }
}
exports.delete = async(request, response) => {
    try{
        const id = parseInt(request.params.id)
        if (id == 0) throw Error('ID não informado')
        await postService.delete(id)
        response.status(200).send({
            status: 200,
            message: "Post deletado!"
        })
    } catch(e){
            return response.status(400).json({
                status: 400,
                message: e.message
            })
    }
}
exports.update = async(request, response) =>{
    try{
        const id = parseInt(request.params.id)
        const {denuncia} = request.body
        await postService.update(id, denuncia)
        response.status(200).send({
            message: "post denunciado com sucesso",
            body:{
                status: 200,
                denuncia: denuncia
            }
    })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}
exports.report = async (request, response) => {
    try{
        const post = await postService.report()
        response.status(200).json({
            status: 200,
            data: post,
            message: 'Post selecionado com sucesso'
        })
    } catch (e){
        response.send(400).json({
            status:400,
            message: e
        })
    }
}