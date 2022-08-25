import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import ApartmentCreationForm from "./ApartmentCreationForm"

const ApartmentPage = () => {
    const [apartment, setApartment] = useState({})
    const [visible, setVisible] = useState(false);

    const { id } = useParams()
    const navigator = useNavigate()

    const onEditApartment = (e) => {
        e.preventDefault()
        visible === true ? setVisible(false) : setVisible(true)
    }

    const onBackButton = (e) => {
        e.preventDefault()
        navigator('/')
    }

    const loadApartment = (url = process.env.REACT_APP_API_URL + '/apartments/' + id) => {
        axios.get(url).then(response => {
            setApartment(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(loadApartment, [])
    
    return (
        <div>
           apartment page
           <p>{apartment.name}</p>
           <p>{apartment.rooms}</p>
           <p>{apartment.price}</p>
           <p>{apartment.description}</p>

           <button onClick={onEditApartment}>edit</button>
           <button onClick={onBackButton}>back</button>
           {visible && <ApartmentCreationForm apartment={apartment} apartmentId={id} />}
        </div>
    )
}

export default ApartmentPage
