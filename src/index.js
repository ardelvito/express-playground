require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');

const app = express();


//Route
const userRoute = require('./routes/userRoute.js');
const articleRoute = require('./routes/articleRoute.js');


//Middleware
const middlewareLogRequest = require('./middleware/logs.js');
const { authenticateToken } = require('./controller/usersController.js');
// const upload = require('./middleware/multer.js');

// app.use("/", (req, res, next) => {
//     res.send('Hello World');
// })

app.use(middlewareLogRequest);
app.use(express.json());
// app.use('/image', express.static('public'));

app.use('/users', userRoute);
app.use('/articles', authenticateToken, articleRoute)

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.use('/', (req, res) => {
    res.send("Hello World");
})
app.listen(PORT, ()=>{
    console.log(`Server Running on PORT ${PORT}`);
})