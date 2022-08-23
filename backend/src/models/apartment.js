const mongoose = require('mongoose')

const apartmentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    rooms: {
        type: Number,
        required: true,
        validate (value) {
            if (value <= 0) {
                throw new Error('Number of rooms should be more than 0')
            }
        }
    },
    name: {
        type: String,
        required: true,
        trim: true,
        validate (value) {
            if (value.length > 99) {
                throw new Error('Name is too long')
            }
        }
    },
    price: {
        type: Number,
        required: true,
        validate (value) {
            if (value <= 0) {
                throw new Error('Apartment price should be more than 0')
            }
        }
    },
    description: {
        type: String,
        trim: true,
        validate (value) {
            if (value.length > 999) {
                throw new Error('Description is too long')
            }
        }
    }
})

const Apartment = mongoose.model('Apartment', apartmentSchema)

module.exports = Apartment
