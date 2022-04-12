const db = require('../db/db')

class BlogModel {
    static getBlogsFromDB (){
        return db.select().from('blogs')
    }
    static getSingleBlogFromDB (id){
        return db.select().from('blogs').where({id})
    }
    static updateBlogFromDB (){
        
    }
    static deleteBlogsFromDB (){
        
    }
    static createBlogsFromDB (){
        
    }
}
module.exports = BlogModel;