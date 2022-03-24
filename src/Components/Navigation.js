import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import { NavLink } from "react-router-dom"
import AddLegoSetButton from './AddLegoSetButton'
import Search from './Search'

const Navigation = () => {
  const {owners} = useContext(MyContext)

  const linkStyles = {
      marginLeft: "15px",
      color: "gray"
  }
  const ownersLinks = owners.map(o => <NavLink key={o.id} style={linkStyles} activeStyle={{color: "white"}} to={`/lego_collection/owners/${o.name}`}>{o.name}</NavLink>)    

  return (
    <div
      style={{
        background: '#191970',
        borderTop: "10px solid #191970",
        paddingBottom: "10px",
        borderBottom: "2.5px solid black"
      }}>
      <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/" exact>Home</NavLink> 
      <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/lego_collection" exact>Lego Collection</NavLink> 
      {ownersLinks}
      <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/lego_collection/genres" exact>View Genres</NavLink> 
      <AddLegoSetButton />
      <Search />      
    </div>
  )
}

export default Navigation
