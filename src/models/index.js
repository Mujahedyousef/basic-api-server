"use strict";
const { Sequelize, DataTypes } = require('sequelize');
const clothes = require('./clothes.js')
const food = require('./food.js')
require('dotenv').config
const POSTGRES_URL = process.env.DATABASE_URL || 'postgresql://mujahedyousef:0000@localhost:5432/my_db'
// let sequelizeOptions = {
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false,
//         }
//     }
// };

let sequelize = new Sequelize(POSTGRES_URL, {})

module.exports = {
    db: sequelize,
    clothes: clothes(sequelize, DataTypes),
    food: food(sequelize, DataTypes)

}