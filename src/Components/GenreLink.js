import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import { Link } from 'react-router-dom'

const GenreLink = () => {
    const {genres} = useContext(MyContext)

    const genresLinks = genres.map(g => 
        <Link key={g.id} style={{paddingLeft: "15px"}} activeStyle={{color: "white"}} to={`/lego_collection/genres/${g.id}`} ><button style={{background: "#191970", color: "gray", fontSize: "20px"}}>{g.name}</button>
        </Link>)  
    return (
        <div style={{background: "#6495ED"}}>
            {genresLinks}
        </div>
    )
}

export default GenreLink