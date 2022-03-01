'use strict'

const validator = (req, res, next) => {
    if (req.query.name) {
        next()
    } else {
        next(`Please enter query name after endpoint !`)
    }
}
module.exports = validator