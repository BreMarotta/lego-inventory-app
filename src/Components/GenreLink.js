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
        <NavLink key={g.id} style={linkStyles} activeStyle={{color: "white"}} to={`/lego_collection/genres/${g.id}`}>{g.name}</NavLink>)  
    return (
        <div style={{
            background: '#191970',
            borderTop: "10px solid #191970",
            paddingBottom: "10px",
            borderBottom: "2.5px solid black"
          }}>
            {genresLinks}
        </div>
    )
}

export default GenreLink