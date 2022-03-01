'use strict';
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator')
const errorHandler = require('../src/error-handlers/500')
const notFound = require('../src/error-handlers/404')
const routerClothes = require('./routes/clothes')
const routerFood = require('./routes/food')
const app = express();
app.use(express.json())
app.use(cors())
app.use(logger)
app.use(routerClothes)
app.use(routerFood)


app.get('/', (req, res) => {
    res.status(200).send("Welcom in home page.")
})

app.get('/person', validator, (req, res) => {
    res.status(200).json({
        Name: req.query.name
    })
})

function start(port) {
    app.listen(port, () => console.log(`Running on Port ${port}`))
}

app.use('/', (req, res) => {
    res.send('server is alive')
})
app.use(errorHandler)
app.use('*', notFound)



module.exports = {
    app: app,
    start: start
}