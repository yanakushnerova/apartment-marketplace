import React, { useState } from "react"

const ApartmentListItem = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.rooms}</p>
            <p>{props.price}</p>
            
            <button>rent</button>
            <button>delete</button>
        </div>
    )
}


export default ApartmentListItem
