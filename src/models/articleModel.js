const dbPool = require('../config/db.js');

const getAllArticle = () => {
    // const SQLQuery = 'SELECT * FROM users'
    const SQLQuery = 'SELECT * FROM articles'

    return dbPool.execute(SQLQuery);
}
module.exports = {
    getAllArticle
}