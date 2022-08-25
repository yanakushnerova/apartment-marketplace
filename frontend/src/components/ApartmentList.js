import React, { useState, useEffect } from "react"
import axios from "axios"
import ApartmentListItem from "./ApartmentListItem"

const ApartmentList = () => {
    const [apartments, setApartments] = useState([])

    const loadApartments = (url = process.env.REACT_APP_API_URL + '/apartments') => {
        axios.get(url).then(response => {
            setApartments(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(loadApartments, [])

    return (
        <div>
            <p>Available apartments: {apartments.length}</p>
            { apartments ? (
                apartments.map((apartment) => {
                    return <ApartmentListItem key={apartment._id} {...apartment} />
                })
            ) : (<p>no apartments</p>)}
        </div>  
    )
}

export default ApartmentList
