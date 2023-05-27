import Validation from "@/validators/validation"

const AuthController = Object.create(null)
Object.defineProperties(AuthController, {
    uuid_hex: {
        value: 32,
        configurable: false,
        writable: true
    },
    password: {
        value: undefined,
        configurable: false,
        writable: true,
    }
})

AuthController.verify = function(uuid: String, pass: String) {
    let uuid_hex = this.uuid_hex || undefined
    let password = this.password || undefined
    if(Validation.valid_password(pass)) console.log('ok', pass)
}


export default AuthController