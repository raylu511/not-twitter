const likesModel = require('../models/blogModel');

class LikesController {
    static async getLikes (req, res){
        const likes = await likesModel.getLikesFromDB()
        res.send(likes)
    }
    static async getSingleLike (req, res){
        const id = req.params.id;
        const likes = await likesModel.getSingleLikeFromDB(id)
        res.send(likes)
    }
    static deleteLike (req, res){
        res.send('hello')

    }
    static createLike (req, res){
        res.send('hello')

    }

}

module.exports = LikesController