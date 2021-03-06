const User = require("./../models/User")

class UserService{
    static create(id,username,name){
        return new User(id,username,name, "Sin bio")
    }
    static getInfo(user){ // get nos ayuda a obtener informacion especifica
        return [user.id, user.username, user.name, user="Sin bio"]
    }
    static updateUserUsername ( user,newUsername){
        return user.username = newUsername

    }
    static getAllusernames(user1,user2,user3){
        return User.map(user1.username,user2[1],user3.username)
    }
}
module.exports = UserService