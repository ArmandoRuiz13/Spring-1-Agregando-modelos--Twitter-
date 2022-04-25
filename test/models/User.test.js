const { TestWatcher } = require('jest')
const User= require('./../../app/models/User')

describe('',()=> {
    test('', () =>{
        const user = new User(1,"Armandobolt13","Armando","Bio", "dateCreated","lastUpdate")
        // valores esperados
        expect(user.id).toBe(1)
        expect(user.username).toBe("Armandobolt13")
        expect(user.name).toBe("Armando")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdate).toBe("lastUpdate")
    })
})