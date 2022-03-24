import React, { useState, useContext } from 'react'
import { MyContext } from './MyContext'

const Search = () => {
    const {updateSearch, filterSets} = useContext(MyContext)


    const handleChange = (e) => {
        updateSearch(e.target.value)
        // filterSets()
    }
    const searchStyle = {
        color: "white",
        float: "right",
        marginRight: "10px"
    }
  return (
    <form className="searchbar" style={searchStyle}>
        <button>🔍</button>
        <input style={{width: "300px", paddingTop: "4px"}} type="text" id="search" placeholder="search for a Lego Set..." name="searchNumber" onChange={handleChange}/>
        
    </form>
  );
}

export default Search
