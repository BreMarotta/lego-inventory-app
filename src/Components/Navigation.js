import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import { NavLink } from "react-router-dom"
import AddLegoSetButton from './AddLegoSetButton'

const Navigation = () => {
    const {owners} = useContext(MyContext)

    const linkStyles = {
        marginLeft: "15px",
        color: "gray"
    }
    const ownersLinks = owners.map(o => 
        <NavLink key={o.id} style={linkStyles} activeStyle={{color: "white"}} to={`/lego_collection/owners/${o.name}`}>{o.name}</NavLink>)    

  return (
    <div
      style={{
        background: '#191970',
        borderTop: "10px solid #191970",
        borderBottom: "10px solid #191970",
        paddingBottom: "10px"
      }}>
          <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/" exact>Home</NavLink> 
          <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/lego_collection" exact>Lego Collection</NavLink> 
          {ownersLinks}
          <AddLegoSetButton />
      </div>
  )
}

export default Navigation
