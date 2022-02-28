"use strict";
require('dotenv').config
const server = require("./src/server");
const { db } = require('./src/models/index')
//Connecting server with database.
db.sync().then(() => {
    server.start(process.env.PORT || 3000)
}).catch(console.error)

