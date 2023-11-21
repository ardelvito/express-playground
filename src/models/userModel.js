const dbPool = require('../config/db.js');
const bcrypt = require('bcrypt');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users'

    return dbPool.execute(SQLQuery);
}
const createNewUser = async (body) => {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    
    const SQLQuery = `INSERT INTO users(username, password) 
                        VALUES (
                            '${body.username}', 
                            '${hashedPassword}'
                        )`;
    return dbPool.execute(SQLQuery);

}

const updateUser = (body, id) => {
    const SQLQuery = `UPDATE users 
                        SET name='${body.name}', 
                        email='${body.email}',
                        address='${body.address}'
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery)
}

const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM users WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const isEmailRegistered  = async (username) => {
    const SQLQuery = `SELECT COUNT(*) AS count FROM users WHERE username='${username}'`;

    const [rows] = await dbPool.execute(SQLQuery);
    
    const count = rows[0].count;

    return count > 0;

}

const userLogin = async (username, password) => {
    const SQLQuery = `SELECT password FROM users WHERE username='${username}'`;
    
    const [rows] = await dbPool.execute(SQLQuery);
    
    const selectedPassword = rows[0].password;

    

    const loginChecker = await bcrypt.compare(password, selectedPassword);

    if(loginChecker){
        return true;
    }
    else{
        return false
    }

}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    isEmailRegistered,
    userLogin
}