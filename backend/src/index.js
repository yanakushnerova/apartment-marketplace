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

app.listen(port, () => {
    console.log('server is up on port ' + port)
})
