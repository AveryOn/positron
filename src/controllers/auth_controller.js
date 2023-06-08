import Validation from "@/validators/validation";

const AuthController = Object.create(null)
Object.defineProperties(AuthController, {
    uuid_hex: {
        value: undefined,
        configurable: false,
        writable: true
    },
    password: {
        value: undefined,
        configurable: false,
        writable: true,
    }
})

AuthController.verify = function() {
    let uuid_hex = this.uuid_hex || undefined;
    let password = this.password || undefined;
    if(Validation.valid_password(password) && Validation.valid_uuid(uuid_hex)) {
        console.log('%c ok 2', 'color: teal', password, uuid_hex);
        return true;
    } else {
        console.log('%c error', 'color: red;', password, uuid_hex);
        return false;
    }
}


export default AuthController;