// Модуль соединения с БД
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('POSITRON', 'postgres', 'root', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
});

module.exports = {
    sequelize
}