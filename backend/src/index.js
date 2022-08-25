const express = require('express')
require('./db/mongoose')

const apartmentRouter = require('./routers/apartment')
const port = process.env.PORT
const app = express()

app.use(express.json())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
    next()
})

app.use(apartmentRouter)

app.listen(port, () => {
    console.log('server is up on port ' + port)
})
