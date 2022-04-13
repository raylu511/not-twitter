const db = require('../db/db')

class CommentsModel {
    static getCommentsFromDB (){
        return db.select().from('comments')
    }
    static getSingleCommentFromDB (id){
        return db.select().from('comments').where({id})
    }
    static updateCommentsFromDB (){
        
    }
    static deleteCommentsFromDB (){
        
    }
    static createBCommentsFromDB (){
        
    }
}
module.exports = CommentsModel;