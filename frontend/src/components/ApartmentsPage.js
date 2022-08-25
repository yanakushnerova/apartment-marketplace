import React from 'react'
import axios from 'axios'
import ApartmentList from './ApartmentList'
import AddApartment from './AddApartment'

const ApartmentsPage = () => (
    <div>
        <AddApartment />
        <ApartmentList />
    </div>
)

export default ApartmentsPage
