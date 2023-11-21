const express = require('express');

const ArticleController = require('../controller/articleController.js');

const route = express.Router();


//GET ALL Article
route.get('/', ArticleController.getAllArticle);

module.exports = route;
