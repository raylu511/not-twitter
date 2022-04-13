const db = require('../db/db')

class BlogModel {
    static getBlogsFromDB (){
        return db.select().from('blogs').orderBy("created_at", "desc");
    }
    static getSingleBlogFromDB (id){
        return db.select().from('blogs').where({id})
    }
    static updateBlogFromDB (){
        
    }
    static deleteBlogsFromDB (){
        
    }
    static createBlogsFromDB (user_id, body){
        return db("blogs").insert({body, user_id}).returning(["id", "body"]);
    }
}
module.exports = BlogModel;