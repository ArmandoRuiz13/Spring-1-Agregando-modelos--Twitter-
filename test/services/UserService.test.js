const UserService = require('./../../app/services/UserService')

describe("User service testeo",() => {
    test("1. Creando un nuevo usuario usando el UserService", () => {
        const user = UserService.create(1,"Armandobolt13","Armando")
         expect(user.username).toBe("Armandobolt13")
         expect(user.name).toBe("Armando")
         expect(user.id).toBe(1)
         expect(user.bio).not.toBeUndefined()
    })
})