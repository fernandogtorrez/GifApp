import { getSaludo, getUser } from "./functions";

describe('test demo',()=> {
    test('test 1 - Numero igual', () => {
        expect(1===1).toBe(true)
    })
    test('test 2', () => {
        //1.Arrange / Inicio
        const message1 = 'Hola'

        //2. Act / Acciones
        const message2 = message1.trim()

        //3. Assert / Observar el comportamiento esperado...

        expect(message1).toBe(message2)

    })
    test('test 3 - getNombre', () => {
        const nombre = 'Fernando'

        const message = getSaludo(nombre)

        expect(message).toBe(`Hola ${nombre}`)
    })

    test('test 4 - getUser', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'talerista'
        }

        const user = getUser()

        expect(testUser).toEqual(user)
    })
});