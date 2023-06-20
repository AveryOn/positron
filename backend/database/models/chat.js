// ТАБЛИЦА Чат
const { sequelize } = require('../connect.js');
const { DataTypes } = require('sequelize');

const Chat = sequelize.define('chat', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    own_UUID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstUserUUID: {
        type: DataTypes.UUID,
        allowNull: false
    },
    secondUserUUID: {
        type: DataTypes.UUID,
        allowNull: false
    }
})

module.exports = Chat;