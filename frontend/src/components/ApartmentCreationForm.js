import React, { useState } from "react"
import axios from "axios"

const ApartmentCreationForm = (props) => {
    const [name, setName] = useState(props?.apartment?.name ? props.apartment.name : '')
    const [price, setPrice] = useState(props?.apartment?.price ? props.apartment.price : '')
    const [rooms, setRooms] = useState(props?.apartment?.rooms ? props.apartment.rooms : '')
    const [description, setDescription] = useState(props?.apartment?.description ? props.apartment.description : '')
    const [error, setError] = useState('')
    const isEditing = props.apartment ? true : false

    const onNameChange = (e) => {
        const name = e.target.value

        if (name.length <= 99) {
            setName(name)
        }
    }

    const onRoomsChange = (e) => {
        const rooms = e.target.value

        if (rooms.match(/^\d{0,}$/)) {
            setRooms(rooms)
        }
    }

    const onPriceChange = (e) => {
        const price = e.target.value

        if (price.match(/^\d{0,}$/)) {
            setPrice(price)
        }
    }

    const onDescriptionChange = (e) => {
        const description = e.target.value

        if (description.length <= 999) {
            setDescription(description)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name || !price || !rooms) {
            setError('Please provide name, price and number of rooms')
        } else if (parseInt(rooms) <= 0) {
            setError('Number of rooms should be more than 0')
        } else if (parseInt(price) <= 0) {
            setError('Price should be more than 0')
        } else {
            setError('')
            if (!isEditing) {
                axios.post(process.env.REACT_APP_API_URL + '/apartments', { name, rooms, price, description }).then((res) => {
                    console.log(res)
                    window.location.reload()
                }).catch(error => {
                    console.log(error)
                })
            } else {
                axios.put(process.env.REACT_APP_API_URL + '/apartments/' + props.apartmentId, { name, rooms, price, description }).then((res) => {
                    console.log(res)
                    window.location.reload()
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }

    return (
        <div className="container">
            <div>
                <div className="apartment__creation">
                    { !props.apartment ? <p className="apartment__creation__title">Create new ad</p> :
                     <p className="apartment__creation__title">Edit your ad</p> }
                    { error || <p className="apartment__creation__error">{error}</p> }
                    <form className="apartment__creation__form" onSubmit={onSubmit}>
                        <input
                            className="apartment__creation__form__name"
                            placeholder="name"
                            type="text"
                            value={name}
                            onChange={onNameChange}
                        ></input>
                        <input
                            className="apartment__creation__form__rooms"
                            placeholder="rooms"
                            type="text"
                            value={rooms}
                            onChange={onRoomsChange}
                        ></input>
                        <input
                            className="apartment__creation__form__price"
                            placeholder="price, $"
                            type="text"
                            value={price}
                            onChange={onPriceChange}
                        ></input>
                        <input
                            className="apartment__creation__form__description"
                            type="text"
                            placeholder="description"
                            value={description}
                            onChange={onDescriptionChange}
                        ></input>

                        { props.apartment ? <button className="create__button">save changes</button> : 
                        <button className="create__button">create</button>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApartmentCreationForm
