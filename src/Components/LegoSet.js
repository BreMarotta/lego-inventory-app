import React, { useState } from 'react'

const LegoSet = ({ set }) => {
  const cardStyles = {
    paddingLeft: "25px",
    radius: "25px",
    paddingBottom: "5px",
    border: `solid ${set.owner.color} 5px`
  }

  return (
    <div style={cardStyles}>
      <a className="image" >
          <img style={{width: "150px"}} src={set.img} alt="No Image Available" />
        </a>
        <a className="content" style={{marginRight: "75px",float: "right", background: "borderColor"}}>
          <h3 style={{alignContent: "center"}}>{set.name}</h3>
          <hr/>
          <p>Pieces: {set.pieces}</p>
          <p>Set Number: {set.set_number}</p>
        </a>
    </div>
  )
}

export default LegoSet

