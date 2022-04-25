const UserView = require("./../../app/views/UserView")

describe("Test para UserView sprint 3", () => {
    test("Requerimiento 1- retornar un error objecto, al intentar crear un nuevo usuario con with an null payload", () =>{
        const payload = null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })
    test("Requerimiento 2- retornar un error objecto cuando intenta crear un nuevo usuario con with a payload con propiedades invalidas", () =>{
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Necesitan tener un valor valido/)
    })
})