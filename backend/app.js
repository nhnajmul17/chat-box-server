const express = require("express");
const dotenv = require('dotenv')
const cors = require("cors");
const Userrouter = require("./modules/userModule/user.route");

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/v1/users', Userrouter)


app.get('/', (req, res) => {
    res.send("Chat-Box server is running")
})

module.exports = app

