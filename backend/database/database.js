const models = require('./models.js');
const actions = require('./actions.js');

const sequelize = models.sequelize;


(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

})()

// sequelize.sync({ force: true });

module.exports = {
    sequelize
}