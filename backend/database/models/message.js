// ТАБЛИЦА Сообщение
const { sequelize } = require('../connect.js');
const { DataTypes } = require('sequelize');

const Message = sequelize.define('message', {
    data: DataTypes.STRING,
    files: DataTypes.ARRAY(DataTypes.STRING),
    fromUserUUID: DataTypes.UUID,
    toUserUUID: DataTypes.UUID,
})

module.exports = Message;