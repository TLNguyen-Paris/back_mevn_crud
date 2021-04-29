require('dotenv').config();
require('./configs/mongo_config');

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(cors({credentials: true, origin: "*"}));


app.listen(process.env.Backport, () => {
    console.log("Server is Up");
})