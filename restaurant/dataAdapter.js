const {menu} = require('./menu');
module.exports.fetchMenu = async () => {
    const redisData = null;
    // check for redis data

    if (redisData) {
        return redisData;
    }

    // run query against database
    return menu;
}