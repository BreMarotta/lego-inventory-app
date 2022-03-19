import React from 'react'
import { Link } from 'react-router-dom'

const AddLegoSetButton = () => {
    const linkStyles = {
        padding: "10px",
        color: "white",
        background: "#800000",
        float: "right",
        marginRight: "25px"
        
    }
    
    return (
        <Link to={'/lego_collection/new'}>
            <button style={linkStyles}>Add Lego Set To Collection</button>
        </Link>
    )
}

export default AddLegoSetButton