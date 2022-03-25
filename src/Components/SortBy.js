import React, { useState, useContext } from 'react'
import { MyContext } from './MyContext'

const SortBy = () => {
    const {updateSort} = useContext(MyContext)

    const sortStyle = {
        float: "right",
        marginRight: "7px",
        color: "gray",
        background: "#191970"
    }
    const handleChange = (e) => {
        updateSort(e.target.value)
    }

  return (
    <form className="sort" style={sortStyle}>
        <label>Sort by: </label>
        <select onChange={handleChange}>
            <option value="name">Name</option>
            <option value="set_number">Set Number</option>
            <option value="pieces"># of Pieces</option>
        </select>
    </form>
  )
}

export default SortBy