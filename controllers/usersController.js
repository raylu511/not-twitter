const UserModel = require('../models/usersModel');


class UsersContoller {
    static async getUsers(req, res){
        const users = await UserModel.getUsersFromDB()
        res.send(users)
    }

    static async getSingleUser(req, res){
        const id = req.params.id;
        const user = await UserModel.getSingleUserFromDB(id)
        res.send(user)
    }

    static createUser(req, res){

    }

    static updateUser(req, res){

    }

    static deleteUser(req, res){

    }
}

module.exports = UsersContoller;