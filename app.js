const express = require('express');
const app = express();
const ConnectDB = require('./database/connectDb');
const bodyParser = require('body-parser')
const queRoute = require('./router/questions');
const options = require('./router/optionsRouter');

app.use(bodyParser.json())
app.use('/questions', queRoute);
app.use('/options',options);
const startServer = async () => {
    try {
        await ConnectDB('mongodb+srv://abhinavanand0411:User123@issuetracker.ym6ulwy.mongodb.net/').then(() => {
            console.log("DB connection successfull");
        })
        app.listen(3001, () => {
            console.log("server is runninng");
        })
    } catch (error) {
        console.log(error, "ERRR");
    }
}

startServer()