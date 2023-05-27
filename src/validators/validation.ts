const Validation = {
    error: undefined,
    logg: undefined,


    valid_uuid: () => {

    },

    valid_password: function (pass: String): Boolean {
        if(pass.length < 8) {
            console.error('length of password is very small')
            return false
        } else {
            return true
        }
    }
}


export default Validation