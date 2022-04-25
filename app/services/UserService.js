const User = require("./../models/User")

class UserService{
    static create(id,username,name){
        return new User(id,username,name, "Sin bio")
    }
    static getInfo(user){ // get nos ayuda a obtener informacion especifica
        return user[user.id, user.username, user.name, user.bio]
    }
    static updateUserUsername ( user,newUsername){
        return user.username = newUsername

    }
}
module.exports = UserService