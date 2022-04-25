class User{
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }
    get getUsername(){ // get nos ayuda a obtener informacion especifica
        return this.username
    }
    set setUsername(newUsername){
        this.username = newUsername
    }
    set setBio(newbio){
        this.bio = newbio
    }
}
module.exports = User