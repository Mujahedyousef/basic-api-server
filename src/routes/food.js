'use strict'
const express = require('express')
const { food } = require('../models/index.js')
const router = express.Router()

router.get('/food', getFood)
router.post('/food', addFood)
router.get('/food/:id', getFoodById)
router.put('/food/:id', updateFoodById)
router.delete('/food/:id', deleteFoodById)


async function getFood(req, res) {
    let allFood = await food.findAll();
    res.status(200).json(allFood)
}

async function addFood(req, res) {
    let newFood = req.body;
    const createFood = await food.create(newFood);
    res.status(201).json(createFood)
}

async function getFoodById(req, res) {
    let getId = parseInt(req.params.id)
    let getFoodById = await food.findOne({ where: { id: getId } })
    res.status(200).json(getFoodById)
}

async function updateFoodById(req, res) {
    let getIdToUpdate = parseInt(req.params.id)
    let dataUpdateInBody = req.body
    let selectDataById = await food.findOne({ where: { id: getIdToUpdate } })
    let updateDataFood = await selectDataById.update(dataUpdateInBody)
    res.status(201).json(updateDataFood)
}

async function deleteFoodById(req, res) {
    let getIdToDelete = parseInt(req.params.id)
    let deleteFoodById = await food.destroy({ where: { id: getIdToDelete } })
    res.status(204).json(deleteFoodById)
}


module.exports = router