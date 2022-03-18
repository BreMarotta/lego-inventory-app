import React, { useState } from 'react'

const LegoSet = ({ set }) => {
  // const borderColor = set.owner.color
  console.log(set)

  const cardStyles = {
    paddingLeft: "25px",
    paddingBottom: "5px",
    border: "black solid"
  }

  return (
    <div style={cardStyles}>
      <a className="image" >
          <img style={{width: "150px"}} src={set.img} alt="No Image Available" />
        </a>
        <a className="content" style={{marginRight: "75px",float: "right"}}>
          <h3>{set.name}</h3>
          <hr/>
          <p>Pieces: {set.pieces}</p>
          <p>Set Number: {set.set_number}</p>
        </a>
    </div>
  )
}

export default LegoSet

