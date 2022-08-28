import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const ApartmentListItem = (props) => {
    const navigator = useNavigate()
    
    const deleteApartment = (url = process.env.REACT_APP_API_URL + '/apartments/' + props._id) => {
        axios.delete(url).then((res) => {
            window.location.reload()
        }).catch(error => {
            console.log(error)
        })
    }

    const onDelete = (e) => {
        e.preventDefault()
        deleteApartment()
    }

    return (
        <div className="container">
            <div className="apartment__item">
                <p className="apartment__list__item__info">
                    {props.name} / {props.rooms} {props.rooms === 1 ? 'room' : 'rooms'} / {props.price}$ per night
                </p>
                
                <button className="create__button margin__button" onClick={() => {
                    navigator(`/apartments/${props._id}`)
                }}>show details</button>

                <button className="delete__button" onClick={onDelete}>delete</button>
            </div>
        </div>
    )
}

export default ApartmentListItem
