const Apartment = require('../../models/apartment')
const mongoose = require('mongoose')

const apartments = [
    new Apartment({
        name: 'Small apartment near Derzhprom building',
        rooms:  1,
        price:  75,
        description: 'Building is placed in the centre of Kharkiv, near Derzhprom. Nevly repaired, cozy room with TV set, one bed, table and two chairs.'
    }),
    new Apartment({
        name: 'Apartment for a big company',
        rooms: 3,
        price: 114,
        description: 'Three big rooms for up to 8 people, old-fashioned apartment. A five-minute walk to the Kyivska station, grocery store next to house.'
    }),
    new Apartment({
        name: 'One-room apartment near Pushkinska street',
        rooms: 1,
        price: 56,
        description: ''
    }),
    new Apartment({
        name: 'Apartment on Otakara Yarosha street',
        rooms: 2,
        price: 80,
        description: 'Two middle-sized rooms with big beds, big bathroom and kitchen, 7th floor. view of the beautiful park from the window.'
    })
]

mongoose.connect(process.env.MONGODB_URL).catch(err => {
    console.log(err.stack)
    process.exit(1)
}).then(() => {})

apartments.map(async (apartment, index) => {
    await apartment.save((error, result) => {
        if (index === apartments.length - 1) {
            mongoose.disconnect();
        }
    })
})
