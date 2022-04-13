

const commentsModel = require('../models/commentsModel');

class CommentsController {
    static async getCommentsOfBlog(req, res) {
        const blogId = req.params.id;
        const comments = await commentsModel.getCommentsOfBlogFromDB(blogId);
        return res.send(comments)
    }
    static async createCommentOfBlog(req,res) {
        const {userId, text} = req.body;
        const blogId = req.params.id;
        const comment = await commentsModel.createCommentOfBlogFromDB(blogId, userId, text);
        return res.send(comment)
    }
    static async editCommentOfBlog(req, res) {
        const {userId, text} = req.body;
        const blogId = req.params.id;
        const comment = await commentsModel.editCommentOfBlogFromDB(blogId, userId, text);
        return res.send(comment)
    }
    static async deleteCommentOfBlog(req, res) {
        const blogId = req.params.id;
        const comments = await commentsModel.deleteCommentsOfBlogFromDB(blogId);
        return res.send(comments)
    }
}

module.exports = CommentsController