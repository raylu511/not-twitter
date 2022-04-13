const likesModel = require('../models/likesModel');

class LikesController {
    static async getLikes(req, res) {
        const likes = await likesModel.getLikesFromDB();
        res.status(200).send(likes);
    }
    static async getLikesOfSingleBlog(req, res) {
        const blogId = req.params.id;
        const like = await likesModel.getLikesOfSingleBlogFromDB(blogId);
        return res.send(like)
    }
    static async getLikesOfSingleComment(req, res) {
       const commentId = req.params.id;
        const like = await likesModel.getLikesOfSingleCommentFromDB(commentId);
        return res.send(like)
    }
    static async createLikeOfBlog(req,res) {
        const {userId} = req.body;
        const blogId = req.params.id;
        const like = await likesModel.createBlogLikeFromDB(blogId, userId);
        return res.send(like)
    }
    static async createLikeOfComment(req,res) {
        const {userId} = req.body;
        const commentId = req.params.id;
        const like = await likesModel.createCommentLikeFromDB(commentId, userId);
        return res.send(like)
    }
    static async deleteLike(req, res) {
        const id = req.params.id;
        const like = await likesModel.deleteLikeFromDB(id);
        return res.send(like)
    }
}

module.exports = LikesController