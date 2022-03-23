import React, { useState, useContext } from 'react'
import { MyContext } from './MyContext'

const Search = () => {
    const {updateSearch} = useContext(MyContext)

    const [searched, setSearched] = useState({
        searchedNumber: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSearch(searched)
    }

    const handleChange = (e) => {
        updateSearch(e.target.value)
    }
    const searchStyle = {
        color: "white",
        float: "right",
        marginRight: "10px"
    }
  return (
    <form className="searchbar" onSubmit={handleSubmit} style={searchStyle}>
        <button type="submit">🔍</button>
        <input style={{width: "300px", paddingTop: "4px"}} type="text" id="search" placeholder="search by Lego Set Number..." name="searchNumber" onChange={handleChange}/>
        
    </form>
  );
}

export default Search
