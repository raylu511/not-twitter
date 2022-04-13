const db = require('../db/db')

class CommentsModel {
    static getCommentsOfBlogFromDB (blog_id){
        return db.select().from('comments').where({blog_id}).orderBy('created_at')
    }
    static createCommentOfBlogFromDB (blog_id, user_id, comment_text) {
        return db("comments")
        .insert({blog_id, user_id, comment_text})
        .returning(["id", "comment_text"]);
    }
}
module.exports = CommentsModel;