const User = require("./../models/User")

class UserService{
    static create(id,username,name){
        return new User(id,username,name, "Sin bio")
    }
    get getInfo (){ // get nos ayuda a obtener informacion especifica
        return UserService.map(userlist => userlist)
    }
}
module.exports = UserService