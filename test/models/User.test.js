const User= require('./../../app/models/User')

describe('Pruebas User JS ',()=> {
    test('Requerimiento 1: Prueba objetos para la clase User', () =>{
        const user = new User(1,"Armandobolt13","Armando","Bio")
        // valores esperados
        expect(user.id).toBe(1)
        expect(user.username).toBe("Armandobolt13")
        expect(user.name).toBe("Armando")
        expect(user.bio).toBe("Bio")
    })
    test('Requerimiento 2: Fechas en atributos de user', () =>{
        const user = new User(1,"Armandobolt13","Armando","Bio")

        expect(user.dateCreated).not.toBeUndefined() //Verifica que el valor no sea undefined
        expect(user.lastUpdate).not.toBeUndefined()
    })
    test('Requerimiento 3: Agregando getters', () =>{
        const user = new User(1,"Armandobolt13","Armando","Bio")

        expect(user.getUsername).toBe("Armandobolt13")
        expect(user.getBio).toBe("Bio")
        expect(user.getdateCreated).not.toBeUndefined()
        expect(user.getlastUpdate).not.toBeUndefined()        
    })
    test('Requerimiento 4: Agregando setters', () =>{
        const user = new User(1,"Armandobolt13","Armando","Bio")
        user.setUsername = "Armandobolt"
     
        expect(user.username).toBe("Armandobolt")

        user.setBio = "NewBio"

        expect(user.bio).toBe("NewBio")
    })
})