'use strict'
const express = require('express')
const { clothes } = require('../models/index')
const router = express.Router()

router.get('/clothes', getClothes)
router.post('/clothes', addClothes)
router.get('/clothes/:id', getClothesById)
router.put('/clothes/:id', updateClothesById)
router.delete('/clothes/:id', deleteClothesById)


async function getClothes(req, res) {
    let allClothes = await clothes.findAll()
    res.status(200).json(allClothes)
}

async function addClothes(req, res) {
    let newClothes = req.body;
    const createColthes = await clothes.create(newClothes)
    res.status(201).json(createColthes)
}

async function getClothesById(req, res) {
    let getId = parseInt(req.params.id)
    let getClothesById = await clothes.findOne({ where: { id: getId } })
    res.status(200).json(getClothesById)
}

async function updateClothesById(req, res) {
    let getIdToUpdate = parseInt(req.params.id);
    let dataUpdateInBody = req.body;
    let selectDataById = await clothes.findOne({ where: { id: getIdToUpdate } })
    let updateData = await selectDataById.update(dataUpdateInBody)
    res.status(201).json(updateData)
}

async function deleteClothesById(req, res) {
    let getIdToDelete = parseInt(req.params.id);
    let deleteClothesById = await clothes.destroy({ where: { id: getIdToDelete } })
    res.status(204).json(deleteClothesById)
}


module.exports = router;