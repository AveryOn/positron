const Validation = {
    error: undefined,
    logg: undefined,

    // Регулярные выражения для hex-uuid и password
    regex_pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    regex_hash: /#([a-z0-9]+)/gi,

    // Валидация UUID пользователя
    valid_uuid: function (uuid_hash: string): Boolean {
        // До это должна быть пройдена проверка на ключ и проверка есть ли данный хэш в базе
        if(uuid_hash.length > 8 && this.regex_hash.test(uuid_hash)) {return true;} else {return false;}
    },

    valid_password: function (pass: string): Boolean {
        if(this.regex_pass.test(pass)) {
            // Пароль был успешно пройден через регулярное вырожение
            return true;
        } else {
            // Регулярное вырожение не было пройдено успешно
            return false;
        }
    }
}


export default Validation;