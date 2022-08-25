import React, { useState } from "react"
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
        <div>
            <p>{props.name}</p>
            <p>{props.rooms}</p>
            <p>{props.price}</p>
            
            <button>rent</button>
            <button onClick={() => {
                navigator(`/apartments/${props._id}`)
            }}>show details</button>
            <button onClick={onDelete}>delete</button>
        </div>
    )
}

export default ApartmentListItem
