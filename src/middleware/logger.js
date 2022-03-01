"use strict"
const logger = (req, res, next) => {
    console.log(`request method:${req.method} => request method:'${req.path}'`)
    next()
}
module.exports = logger