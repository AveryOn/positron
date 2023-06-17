// МОДЕЛИ БД
const { Sequelize, Op, Model, DataTypes } = require('sequelize');


const sequelize = new Sequelize('', 'postgres', 'root', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
});


module.exports = {
    sequelize,
}