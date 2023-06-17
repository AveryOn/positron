const database = require('./database');
const models = require('./models');

const sequelize = database.sequelize;

async function createUser(testName, testAge, callback){
    const transaction = await sequelize.transaction();
    try{
        const user = models.Users.build({ 
            testName: testName, 
            testAge: testAge,
        });
        await user.save();
        await transaction.commit();
    }catch(err){
        callback(err);
        await transaction.rollback();
    }
    
}
module.exports = {
    createUser
}


