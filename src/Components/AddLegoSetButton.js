import React from 'react'
import { Link } from 'react-router-dom'

const AddLegoSetButton = () => {
    const linkStyles = {
        color: "white",
        background: "#6A5ACD",
        float: "right",
        marginRight: "25px"   
    }
    
    return (
        <Link to={'/lego_collection/new'}>
            <button style={linkStyles}>Add Lego Set</button>
        </Link>
    )
}

export default AddLegoSetButton