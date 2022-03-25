import React, { useState, useContext } from 'react'
import { MyContext } from './MyContext'

const Search = () => {
  const {updateSearch} = useContext(MyContext)

  const searchStyle = {
    color: "white",
    float: "right",
    marginRight: "10px"
  }

  return (
    <form className="searchbar" style={searchStyle}>
      <button onClick={(e) => e.preventDefault()}>🔍</button>
      <input style={{width: "400px", paddingTop: "4px"}} type="text" id="search" placeholder="search for a Lego Set..." name="searchNumber" onChange={(e) => updateSearch(e.target.value)}/>        
    </form>
  );
}

export default Search
