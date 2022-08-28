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
            <div className="container">
                <div className="apartment__page__info">
                    <p>{apartment.name}</p>
                    <p>{apartment.rooms} {apartment.rooms === 1 ? 'room' : 'rooms'}, {apartment.price}$ per one night</p>
                    <p>{apartment.description}</p>
                </div>

                <div className="apartment__page__buttons">
                    <button className="create__button margin__button" onClick={onEditApartment}>edit</button>
                    <button className="delete__button" onClick={onBackButton}>back</button>
                </div>
            </div>

            {visible && <ApartmentCreationForm apartment={apartment} apartmentId={id} />}
        </div>
    )
}

export default ApartmentPage
