const router = require('express-promise-router')()
const postController = require('../controllers/post.controllers')

router.get('/post', postController.findAll)
// router.get('/post/:id', postController.findById)
router.get('/post/reports', postController.report)
router.post('/post', postController.create)
router.put('/post/:id', postController.update)
router.delete('/post/:id', postController.delete)


module.exports = router