const UserModel = require('../models/userModel.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getAllUsers = async (req, res) => {
    try{
        const [data] = await UserModel.getAllUsers();    

        res.json({
            message: 'GET all users success',
            data: data
        })
    }
    catch (error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}

const createNewUser = async (req, res) => {
    const {body} = req;
    const { username, password } = req.body;
    // console.log(req.body);
    if(!body.username || !body.password){
        return res.status(400).json({
            message: 'BAD Request',
            data: null
        })
    }

    try{

        const registered = await UserModel.isEmailRegistered(username);

        if (registered) {
            res.json({
                message: 'Username already registered'
            })
        } else if (!registered) {

            await UserModel.createNewUser(body);
                res.status(201).json({
                message: 'CREATE new user success',
                data: body
            });
        } 
    }
    catch (error){
        res.status(500).json({
            message: 'Server Error: CREATE new user failed',
            serverMessage: error.message
        })
    }

}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    // console.log('ID User', id);
    try{
        await UserModel.updateUser(body, id);
        res.json({
            message: 'UPDATE user SUCCESS',
            data: {
                id: id,
                ...body
            },
        })
    }
    catch (error){
        res.status(500).json({
            message: 'Server Error: UPDATE user failed',
            serverMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try{
        await UserModel.deleteUser(id)  
        res.json({
            message: 'DELETE user success',
            data: null
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }

}

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password){
        return res.status(400).json({
            message: 'BAD Request',
            data: null
        })
    }

    try{
        
        const registered = await UserModel.isEmailRegistered(username);
        const accessToken = jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET)


        if (registered) {
            const loginChecker = await UserModel.userLogin(username, password);

            if(loginChecker){
                res.json({
                    message: 'Login Success',
                    accessToken: accessToken
                })
            }
            else{
                res.json({
                    message: 'Login Failed, username or password is wrong'
                })
            }

        } else if (!registered) {
            res.json({
                message: 'Please regist first'
            })
        } 
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: CREATE new user failed',
            serverMessage: error.message
        })
    }

}

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if(authHeader){
        const token = authHeader.split(' ')[1];

        // if(token == null) {
        //     res.status(401).json({
        //         message: 'Unauthorized'
        //     })
        // }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, username) => {
            if(err) return res.sendStatus(403);

            req.username = username;

            next();
        })
    }
    else{
        res.status(401).json({
            message: 'Unauthorized'
        })
    }
    
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    loginUser,
    authenticateToken
}