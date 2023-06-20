// Модуль CRUD-функций СООБЩЕНИЯ
const { Chat, Message } = require('../models');
const { sequelize } = require('../connect.js');

// Создать единицу сообщения
async function createMessage(chatID, data, files, fromUserUUID, toUserUUID, callback){
    const transaction = await sequelize.transaction();
    try {
        const chat = await Chat.findByPk(chatID);
        const newMessage = await Message.create({
            data,
            files,
            fromUserUUID,
            toUserUUID
        });
        await chat.addMessage(newMessage);
        await transaction.commit();
    } catch (err) {
        await transaction.rollback();
        return callback(err);
    }
}

module.exports = {
    createMessage
}