const User = require('../../app/models/User')
const UserService = require('./../../app/services/UserService')

describe("User service testeo",() => {
    test("1. Creando un nuevo usuario usando el UserService", () => {
        const user = UserService.create(1,"Armandobolt13","Armando")
         expect(user.username).toBe("Armandobolt13")
         expect(user.name).toBe("Armando")
         expect(user.id).toBe(1)
         expect(user.bio).not.toBeUndefined()
    })
    test("2. Agregegando getter para recibir todos los datos de UserService", () => {
        const user = UserService.create(1,"Armandobolt13","Armando")
        const userInfoInlist = UserService.getInfo(user)
        expect(userInfoInlist[0]).toBe(1)
        expect(userInfoInlist[1]).toBe("Armandobolt13")
        expect(userInfoInlist[2]).toBe("Armando")
        expect(userInfoInlist[3]).toBe("Sin bio")
    })
    test("3. Update username", () => {
        const user = UserService.create(1,"Armandobolt13","Armando")
        UserService.updateUserUsername(user, "Armandobolt")
        expect(user.username).toBe("Armandobolt")
    })
    test("4. Recibir una lista de todos los usuarios", () => {
        const user1 = UserService.create(1,"Armandobolt131","Armando")
        const user2 = UserService.create(1,"Armandobolt132","Armando")
        const user3 = UserService.create(1,"Armandobolt133","Armando")
        const usernames = UserService.getAllusernames([user1,user2,user3])
        expect(usernames).toContain("Armandobolt131")
        expect(usernames).toContain("Armandobolt132")
        expect(usernames).toContain("Armandobolt133")
    })
})