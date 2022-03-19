import React, { useState } from 'react'

const LegoSet = ({ set }) => {
  const cardStyles = {
    margin: "10px",
    paddingBottom: "5px",
    border: `solid ${set.owner.color} 5px`,
    borderRadius: "25",
    display: "inline-grid",
    width: "250px",
    height: "350px"
  }

  return (
    <div style={cardStyles}>
      <a className="image" style={{margin: "auto"}}>
          <img style={{width: "150px"}} src={set.img} alt="No Image Available" />
        </a>
        <a className="content" style={{paddingLeft: "15px"}}>
          <h3 style={{alignContent: "center"}}>{set.name}</h3>
          <p style={{paddingLeft: "15px"}}>Pieces: {set.pieces}</p>
          <p style={{paddingLeft: "15px"}}>Set Number: {set.set_number}</p>
        </a>
    </div>
  )
}

export default LegoSet

