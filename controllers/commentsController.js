const commentsModel = require('../models/commentsModel');

class CommentsController {
    static async getCommentsOfBlog(req, res) {
        const blogId = req.params.id;
        const comments = await commentsModel.getCommentsOfBlogFromDB(blogId);
        return res.json(comments)
    }
    static async createCommentOfBlog(req,res) {
        const {userId, text} = req.body;
        const blogId = req.params.id;
        console.log(req.body)
        const comment = await commentsModel.createCommentOfBlogFromDB(blogId, userId, text);
        return res.json(comment)
    }
    static async editCommentOfBlog(req, res) {
        const {userId, text} = req.body;
        const blogId = req.params.id;
        const comment = await commentsModel.editCommentOfBlogFromDB(blogId, userId, text);
        return res.json(comment)
    }
    static async deleteCommentOfBlog(req, res) {
        const blogId = req.params.id;
        const comments = await commentsModel.deleteCommentsOfBlogFromDB(blogId);
        return res.json(comments)
    }
}

module.exports = CommentsController