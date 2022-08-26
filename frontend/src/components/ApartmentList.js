import React, { useState, useEffect } from "react"
import axios from "axios"
import ApartmentListItem from "./ApartmentListItem"

const ApartmentList = () => {
    const [apartments, setApartments] = useState([])
    const [sortPrice, setSortPrice] = useState('none')
    const [filterRooms, setFilterRooms] = useState('')

    const onSortPriceChange = (e) => {
        if (e.target.value === 'asc') {
            setSortPrice('asc')
        } else if (e.target.value === 'desc') {
            setSortPrice('desc')
        } else {
            setSortPrice('none')
        }
    }

    const onFilterRoomsChange = (e) => {
        const rooms = e.target.value
        
        if (rooms.match(/^\d{0,}$/)) {
            setFilterRooms(rooms)
        }
    }

    const loadApartments = (url = process.env.REACT_APP_API_URL + '/apartments') => {
        let query = ''

        if (filterRooms) {
            query += '?rooms=' + parseInt(filterRooms)
        } 
        
        if (sortPrice !== 'none') {
            !query ? query += '?price=' + sortPrice : query += '&price=' + sortPrice
        }

        axios.get(url + query).then(response => {
            setApartments(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const onApplyFilters = (e) => {
        e.preventDefault()
        loadApartments()
    }

    useEffect(loadApartments, [])

    return (
        <div>
            <p>sort by price</p>
            <select value={sortPrice} onChange={onSortPriceChange}>
                <option value='none'>none</option>
                <option value='asc'>from lowest to highest</option>
                <option value='desc'>from highest to lowest</option>
            </select>
            
            <input type='text' value={filterRooms} onChange={onFilterRoomsChange} placeholder="number of rooms"></input>
            <button onClick={onApplyFilters}>search</button>

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
