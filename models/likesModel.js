const db = require('../db/db')

class LikesModel {
    static getLikesFromDB (){
        return db.select().from('likes')
    }
    static getLikesOfSingleBlogFromDB (blogId){
        return db.select().from('likes').where({blogId})
    }
    static getLikesOfSingleCommentFromDB (commentId){
        return db.select().from('likes').where({commentId})
    }


    static createBlogLikeFromDB(blogId, userId){
        return db("likes").insert({blogId, userId})
    }
    static createCommentLikeFromDB(commentId, userId){
        return db("likes").insert({commentId, userId})
    }


    static deleteLikeFromDB (id){   
        return db.del().from('likes').where({id})
    }
}
module.exports = LikesModel;