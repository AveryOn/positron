// Связующий модуль для CRUD-функций всех таблиц БД
const userActions = require('./userActions.js');
const chatActions = require('./chatActions.js');
const messageActions = require('./messageActions.js');

module.exports = {
    userActions,
    chatActions,
    messageActions,
}


