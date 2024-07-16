const router = require('express-promise-router')()
const userController = require('../controllers/user.controllers')

router.get('/user', userController.findAll)
router.get('/user/:id', userController.findById)
router.post('/user', userController.create)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)
router.post('/login/user', userController.login)


module.exports = router