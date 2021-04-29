require('dotenv').config();
require('./configs/mongo_config');

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors({credentials: true, origin: "*"}));


app.listen(process.env.Backport, () => {
    console.log("Server is Up");
})


// Call routes
const UserRoutes = require('./routes/user_route')

// Use Route
app.use('/api', UserRoutes)