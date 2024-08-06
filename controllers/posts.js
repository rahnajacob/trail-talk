const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verify-token')
const Post = require('../models/posts')

router.use(verifyToken)

//tested and works on postman
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({}).populate('author').sort({createdAt: 'desc'})
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
});

//tested and works on postman
router.get('/search', async (req, res) => {
    try {
        //const search = await Post.find({city : 'Osaka'}).populate('author') - to simulate a filter of Osaka resultsS
        const search = await Post.find({}).populate('author')
        res.status(200).json(search)
    } catch (error) {
        res.status(500).json(error)
    }
});

//tested and works on postman
router.get('/recent-posts', async (req, res) => {
    try {
        const recentPosts = await Post.find({author: req.user._id }).populate('author').sort({createdAt: 'desc'})
        res.status(200).json(recentPosts)
    } catch (error) {
        res.status(500).json(error)
    }
});


//tested and works on postman
router.get('/post/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author')
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('', async (req, res) => {
    try {

    } catch (error) {

    }
});

//Create a new post (tested on Postman)
router.post('/post', async (req, res) => {
    try {
        req.body.author = req.user._id
        const post = await Post.create(req.body)
        post._doc.author = req.user
        return res.status(201).json(post)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

//Update a post (tested on Postman)
router.put('/post/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        if (!post.author.equals(req.user._id)) {
            return res.status(401).json({error: "You are unauthorised to carry out that action"})
        }
        const updatedPost = await Post.findByIdAndUpdate(req.params.postId, req.body, {new : true})
        updatedPost._doc.author = req.user
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

//tested and works on postman
router.delete('/post/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post.author.equals(req.user._id)){
            console.log('error2')
            return res.status(403).send('Unauthorized')
        }
        const deletePost = await Post.findByIdAndDelete(req.params.id)
        res.status(200).json(deletePost)
    } catch (error) {
        res.status(500).json(error)
    }
});

//Create a new comment
router.post('/post/:postId/comment', async (req, res) => {
    try {
        req.body.author = req.user_id
        const post = await Post.findById(req.params.postId)
        post.comments.push(req.body)        
        await post.save()
        const newComment = post.comments[post.comments.length - 1]
        newComment._doc.author = req.user
        return res.status(201).json(newComment)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

//Editing a comment (errors present on postman)
router.put('/post/:postId/comment/:commentId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)

        const comment = post.comments.id(req.params.commentId)

        if (!comment._doc.author._id.equals(req.user._id)) {
            throw new Error('You cannot perform this action!')
        }
        comment.text = req.body.text
        await post.save()
        comment._doc.author = req.user
        return res.status(200).json(comment)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

//Deleting a comment
router.delete('/post/:postId/comment/:commentId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        console.log("post:", post)
        const deletedComment = post.comments.id(req.params.commentId)
        deletedComment.remove()
        // post.comments.remove({_id: req.params.commentId})
        console.log("before the save:", post)
        await post.save()
        console.log("after the save:", post)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});


router.get('', async (req, res) => {
    try {

    } catch (error) {

    }
});

router.post('', async (req, res) => {
    try {

    } catch (error) {

    }
});


module.exports = router;