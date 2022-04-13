const commentsModel = require('../models/blogModel');

class CommentsController {
    static async getBlogs (req, res){
        const comment = await commentsModel.getCommentsFromDB()
        res.send(comment)
    }
    static async getSingleBlog (req, res){
        const id = req.params.id;
        const comment = await commentsModel.getSingleCommentFromDB(id)
        res.send(comment)
    }
    static async updateBlog (req, res){
        res.send('hello')

    }
    static deleteBlog (req, res){
        res.send('hello')

    }
    static createBlog (req, res){
        res.send('hello')

    }

}

module.exports = CommentsController