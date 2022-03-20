import React, { useState, useContext } from 'react'
import { MyContext } from './MyContext'

const Search = () => {
    const {setSearch} = useContext(MyContext)

    const [searched, setSearched] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(searched)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setSearched(e.target.vlaue)
    }
    const searchStyle = {
        color: "white",
        float: "right",
        marginRight: "10px"
    }
  return (
    <form className="searchbar" onSubmit={handleSubmit} style={searchStyle}>
        <input style={{width: "300px"}} type="text" id="search" placeholder="search Lego Collection..." value={searched} onChange={handleChange}/>
        <button type="submit">🔍</button>
    </form>
  );
}

export default Search
