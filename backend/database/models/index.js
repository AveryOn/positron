// Связующий модуль для моделей БД
const User = require('./user.js');
const Message = require('./message.js');
const Chat = require('./chat.js');


Chat.belongsToMany(User, { through: 'UserChat' })
User.belongsToMany(Chat, { through: 'UserChat' });

Chat.hasMany(Message, {
    foreignKey: {
        name: 'chatID'
    }
})
Message.belongsTo(Chat, {
    foreignKey: {
        name: 'chatID'
    }
})


module.exports = {
    User,
    Message,
    Chat,
}
