const ArticleModel = require('../models/articleModel.js');

const getAllArticle = async (req, res) => {
    try{
        const [data] = await ArticleModel.getAllArticle();    

        res.status(200).json({
            message: 'GET all article success',
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

module.exports = {
    getAllArticle
}