const db = require('../db/db')

class UserModel {
    static getUsersFromDB(){
        return db.select().from('users')
    }

    static getSingleUserFromDB(id){
        return db.select().from('users').where({id})
    }

    static createUserFromDB(){

    }

    static updateUserFromDB(){

    }

    static deleteUserFromDB(){

    }
}

module.exports = UserModel;