const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
var cookieParser = require('cookie-parser');


app.use(cookieParser());

//allow api to access any port
app.use(cors({
    origin: 'http://3.112.21.70:80',
    credentials: true,
}))

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded
const router = require('./routes');
app.use(router);

//mongodb connected
require('./configs/db')();

app.listen(3001, () => {
    console.log("The server: http://3.112.21.70:3001");
})