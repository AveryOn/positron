// Связуйющий модуль всех функций и модулей БД
const { userActions, chatActions, messageActions } = require('./actions');
const models = require('./models');
const { sequelize } = require('./connect.js');

(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
})()
const raw = { raw: true }

async function test() {
    // const foo1 = await models.Chat.create({ name: 'firstFoo' }, { raw: true });
    // const bar1 = await models.User.create({ name: 'bar_1' }, { raw: true });
    // const bar2 = await models.User.create({ name: 'bar_2' }, { raw: true });
    
    // const user2 = await models.User.findByPk(2);
    // const user3 = await models.User.findByPk(3);
    // console.log((await user2.getChats(raw)));

    // const user1 = await models.User.create({username: 'tomas123', email: 'tomas@example.com', password: 'asfuasifoasjf123'}, raw);
    // const user2 = await models.User.create({username: 'alex321', email: 'alex@example.com', password: 'sudahfa921jf123'}, raw);
    // const user3 = await models.User.create({username: 'bob567', email: 'bob@example.com', password: 'asdaerwc129u0as'}, raw);

    const tomas = await userActions.getUserPk(1);
    const alex = await userActions.getUserPk(2);
    const bob = await userActions.getUserPk(3);

    // const response = await bob.getChats(raw);
    // for (const chat of response) {
    //     console.log(chat);
    // }

    // console.log(tomas);
    // const chats = await alex.getChats();
    // for (const chat of chats) {
    //     console.log(await chat.getMessages(raw));
    // }

    // chatActions.createChat(bob.id, alex.id, (res) => {
    //     console.log(res);
    // })

    // messageActions.createMessage(1, 'Hello Friend!', ['asfjasfosf', '2038apefjof', 'awfjap9ghy'], alex.UUID, bob.UUID, (res) => {
    //     console.log(res);
    // })

}


// test()

// sequelize.sync({force: true});
// sequelize.sync();

