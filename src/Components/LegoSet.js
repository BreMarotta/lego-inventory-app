import React, { useState } from 'react'

const LegoSet = ({ set }) => {
  const cardStyles = {
    background: "whitesmoke",
    paddingLeft: "3px",
    display: "inline-grid",
    margin: ".5rem .5rem",
    width: "150px",
    height: "250px"
  }

  return (
    <div style={cardStyles}>
      <div className="image" style={{width: "100"}}>
          <img src={set.img} alt="No Image Available" />
        </div>
        <div className="content">
          <p>{set.name}</p>
          <p>Pieces: {set.pieces}</p>
          <p>Set Number: {set.set_number}</p>
        </div>
    </div>
  )
}

export default LegoSet

