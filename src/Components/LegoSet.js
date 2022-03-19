import React, { useContext, useState } from 'react'
import { MyContext } from './MyContext'

const LegoSet = ({ set }) => {
  const {owners, updateSet} = useContext(MyContext)
  const [newOwner, setNewOwner] =useState({
    owner_id: '',
    id: set.id
  })

  const cardStyles = {
    margin: "10px",
    border: `solid ${set.owner.color} 5px`,
    display: "inline-grid",
    width: "250px",
    height: "400px"
  }

  const buttonStyles = {
      padding: "10px",
      color: "white",
      background: "#6A5ACD",
      width: "220px"
  }

  const [showFormStyle, setShowFormStyle] = useState('hidden')
    
  const toggleForm = () => {
      let newStyle= showFormStyle == 'hidden' ?  '' :  'hidden'
      setShowFormStyle(newStyle)
    }

  const toggleButtonText = set.owner.name === "WishList" ? "Buy Set" : "Trade Set"
  
    const handleChange = (e) => {
      setNewOwner({
        ...newOwner, [e.target.name]: e.target.value
      })
    }

    const handleNewOwnerSubmit = (e) => {
      e.preventDefault()
      const configurationObject = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newOwner),
      };
      fetch(`http://localhost:9292/lego_sets/${set.id}`, configurationObject)
      .then(res => res.json())
      .then(data => {
        updateSet(data)
        toggleForm()
      })
    }

  const ownersDropDown = owners.map(x => <option value={x.id}>{x.name}</option>)

  return (
    <div style={cardStyles}>
      <a style={{margin: "auto"}}>
          <img style={{height: "175px"}} src={set.img} alt="No Image Available" />
        </a>
        <a className="content" style={{paddingLeft: "10px"}}>
          <h3 style={{alignContent: "center"}}>{set.name}</h3>
          <p style={{paddingLeft: "15px"}}>Pieces: {set.pieces}</p>
          <p style={{paddingLeft: "15px"}}>Set Number: {set.set_number}</p>
          <button style={buttonStyles} onClick={toggleForm}>{toggleButtonText}</button>
          <form style={{visibility: showFormStyle}} onSubmit={handleNewOwnerSubmit}>
            <select name="owner_id" onChange={handleChange}>
              <option>New Owner</option>{ownersDropDown}
            </select>
            <input type="submit"/>
          </form>
        </a>
    </div>
  )
}

export default LegoSet

