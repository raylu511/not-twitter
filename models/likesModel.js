const db = require('../db/db')

class LikesModel {
    static getLikesFromDB (){
        return db.select().from('likes')
    }
    static getSingleLikeFromDB (id){
        return db.select().from('likes').where({id})
    }
    static deleteLikesFromDB (){
        
    }
    static createLikesFromDB (){
        
    }
}
module.exports = LikesModel;