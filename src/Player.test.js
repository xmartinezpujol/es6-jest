const Player = require("./Player")

// @ponicode
describe("getName", () => {
    let inst

    beforeEach(() => {
        inst = new Player.default("Anas")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getName()
        }
    
        expect(callFunction).not.toThrow()
    })
})
