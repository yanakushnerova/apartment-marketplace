const express = require('express')
const Apartment = require('../models/apartment')

const router = new express.Router()

router.post('/apartments', async (req, res) => {
    const apartment = new Apartment(req.body)
    
    try {
        await apartment.save()
        res.status(201).send(apartment)
    } catch (e) {
        res.status(400).send(e)
    }
})

//GET /apartments?price=
//GET /apartments?rooms=
router.get('/apartments', async (req, res) => {
    try {
        let apartments = await Apartment.find({})

        if (req.query.rooms) {
            apartments = apartments.filter((apartment) => {
                return apartment.rooms === parseInt(req.query.rooms)
            })
        }

        if (req.query.price) {
            const order = req.query.price === 'asc' ? 1 : -1
            apartments.sort((a, b) => a.price > b.price ? order : -order)
        }

        res.send(apartments)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/apartments/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const apartment = await Apartment.findById(_id)

        if (!apartment) {
            return res.status(404).send()
        }

        res.send(apartment)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.put('/apartments/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const _id = req.params.id

    try {
        const apartment = await Apartment.findById(_id)

        if (!apartment) {
            return res.status(404).send()
        }

        updates.forEach((update) => apartment[update] = req.body[update])
        await apartment.save()
        res.send(apartment)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/apartments/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const apartment = await Apartment.findByIdAndDelete(_id)

        if (!apartment) {
            return res.status(404).send()
        }

        res.send(apartment)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
