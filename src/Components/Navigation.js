import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import { NavLink } from "react-router-dom"
import Owner from './Owner'
import GenreLink from './GenreLink'

const Navigation = () => {
    const {owners, genres} = useContext(MyContext)

    const linkStyles = {
        marginLeft: "15px",
        color: "gray"
    }
    const ownersLinks = owners.map(o => 
        <NavLink key={o.id} style={linkStyles} activeStyle={{color: "white"}} to={`/lego_collection/${o.name}`}>{o.name}</NavLink>)    

  return (
    <div
      style={{
        background: '#2F4F4F',
        borderTop: "10px solid #2F4F4F",
        borderBottom: "10px solid #2F4F4F",
        paddingBottom: "10px"
      }}>
          <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/" exact>Home</NavLink> 
          <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/lego_collection" exact>Lego Collection</NavLink> 
          {ownersLinks}
      </div>
  )
}

export default Navigation
