import React from 'react'
import { NavLink } from "react-router-dom"

const Navigation = () => {

    const linkStyles = {
        marginLeft: "15px",
        color: "gray"
    }

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
          <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/lego_collection/new" exact>Add New Set</NavLink>
          {/* <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/genres" exact>Add a Lego Set!</NavLink> */}
      </div>
  )
}

export default Navigation
