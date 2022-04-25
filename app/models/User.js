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
    get getBio(){ // get nos ayuda a obtener informacion especifica
        return this.bio
    }
    get getdateCreated(){ // get nos ayuda a obtener informacion especifica
        return this.dateCreated
    }
    get getlastUpdate(){ // get nos ayuda a obtener informacion especifica
        return this.lastUpdate
    }
    set setUsername(newUsername){ //Nos ayuda a remplazar un valor
        this.username = newUsername
    }
    set setBio(newbio){
        this.bio = newbio
    }
}
module.exports = User