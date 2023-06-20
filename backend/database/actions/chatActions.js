// Модуль CRUD-функций ЧАТ
const { Chat, User } = require('../models');
const { sequelize } = require('../connect.js');

async function createChat(firsdID, secondID, callback) {
    const transaction = await sequelize.transaction();
    try{
        const firstUser = await User.findByPk(firsdID);
        const secondUser = await User.findByPk(secondID);
    
        const newChat = await Chat.create({
            own_UUID: firstUser.UUID + secondUser.UUID, 
            firstUserUUID: firstUser.UUID,
            secondUserUUID: secondUser.UUID,
        });
    
        await newChat.addUsers([firstUser, secondUser]);
        const result = await newChat.getUsers({ raw: true });
        await transaction.commit();
        return callback(result);
    }catch(err){
        await transaction.rollback();
        callback(err)
        if(err.name === 'SequelizeUniqueConstraintError') {
            console.log('Error: Chat UUID must be unique!');
        }
    }
}

module.exports = {
    createChat
}