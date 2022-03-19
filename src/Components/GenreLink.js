import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import { NavLink } from 'react-router-dom'

const GenreLink = () => {
    const {genres} = useContext(MyContext)

    const linkStyles = {
        marginLeft: "15px",
        color: "gray"
    }

    const genresLinks = genres.map(g => 
        <NavLink key={g.id} to={`/lego_collection/genres/${g.id}`}>
            <button> {g.name} </button>
        </NavLink>)  
    return (
        <div>
            {genresLinks}
        </div>
    )
}

export default GenreLink