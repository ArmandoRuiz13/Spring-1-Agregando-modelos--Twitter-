const { TestWatcher } = require('jest')
const User= require('./../../app/models/User')

describe('Pruebas User JS ',()=> {
    test('Requerimiento 1: Prueba objetos para la clase User', () =>{
        const user = new User(1,"Armandobolt13","Armando","Bio", "dateCreated","lastUpdate")
        // valores esperados
        expect(user.id).toBe(1)
        expect(user.username).toBe("Armandobolt13")
        expect(user.name).toBe("Armando")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdate).toBe("lastUpdate")
    })
    test('Requerimiento 2: Fechas en atributos de user', () =>{
        const user = new User(1,"Armandobolt13","Armando","Bio", "dateCreated","lastUpdate")
        // valores esperados
        expect(user.dateCreated).not.toBeUndefined()("dateCreated") //Verifica que el valor no sea undefined
        expect(user.lastUpdate).not.toBeUndefined()("lastUpdate")
    })
})