const express = require('express')
require('./db/mongoose')
const Apartment = require('./models/apartment')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/apartments', async (req, res) => {
    const apartment = new Apartment(req.body)
    
    try {
        await apartment.save()
        res.status(201).send(apartment)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/apartments', async (req, res) => {
    try {
        const apartments = await Apartment.find({})
        res.send(apartments)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get('/apartments/:id', async (req, res) => {
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

app.put('/apartments/:id', async (req, res) => {
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

app.delete('/apartments/:id', async (req, res) => {
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

app.listen(port, () => {
    console.log('server is up on port ' + port)
})
