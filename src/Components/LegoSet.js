import React, { useContext, useState } from 'react'
import { MyContext } from './MyContext'

const LegoSet = ({ set }) => {
  const {owners} = useContext(MyContext)
  const cardStyles = {
    margin: "10px",
    paddingBottom: "5px",
    border: `solid ${set.owner.color} 5px`,
    borderRadius: "25",
    display: "inline-grid",
    width: "250px",
    height: "400px"
  }

  const buttonStyles = {
      padding: "10px",
      color: "white",
      background: "#800000",
      width: "220px"
  }

  const [showFormStyle, setShowFormStyle] = useState('hidden')
    
    const toggleForm = () => {
        let newStyle= showFormStyle == 'hidden' ?  '' :  'hidden'
        setShowFormStyle(newStyle)
     }

  const ownersDropDown = owners.map(x => <option value="x.id">{x.name}</option>)

  return (
    <div style={cardStyles}>
      <a style={{margin: "auto"}}>
          <img style={{width: "150px"}} src={set.img} alt="No Image Available" />
        </a>
        <a className="content" style={{paddingLeft: "10px"}}>
          <h3 style={{alignContent: "center"}}>{set.name}</h3>
          <p style={{paddingLeft: "15px"}}>Pieces: {set.pieces}</p>
          <p style={{paddingLeft: "15px"}}>Set Number: {set.set_number}</p>
          <button style={buttonStyles} onClick={toggleForm}>Trade Set</button>
          <form style={{visibility: showFormStyle}}>
                    <label>Give Set To: </label>
                    <select>{ownersDropDown}</select>
                    <input type="submit"/>
          </form>
        </a>
    </div>
  )
}

export default LegoSet

