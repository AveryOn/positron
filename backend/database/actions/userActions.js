// Модуль CRUD-функций ПОЛЬЗОВАТЕЛЬ
const { User } = require('../models');
const { sequelize } = require('../connect.js');

// Получение Пользователя по Первичному Ключу
async function getUserPk(primaryKey, error) {
    const transaction = await sequelize.transaction();
    try {
        const findUser = await User.findByPk(primaryKey);
        await transaction.commit();
        return findUser
    } catch (err) {
        await transaction.rollback();
        return error(err);
    }
}

// Создать пользователя
async function createUser(username, email, password, chats = [], callback) {
    const transaction = await sequelize.transaction();
    try {
        const newUser = User.build({
            username: username,
            email: email,
            password: password,
            chats: chats,
        })
        await newUser.save();
        await transaction.commit();
    } catch (err) {
        callback(err);
        await transaction.rollback();
    }
}

module.exports = {
    createUser,
    getUserPk,
}