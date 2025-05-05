const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/my', verifyToken, postController.getPostsByUser);
router.post('/', verifyToken, postController.createPost);
router.delete('/:id', verifyToken, postController.deletePost);

module.exports = router;
