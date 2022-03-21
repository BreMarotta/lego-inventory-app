import React, { useContext, useState } from 'react'
import { MyContext } from './MyContext'

const LegoSet = ({ set }) => {
  const {owners, updateSet} = useContext(MyContext)
  const [infoStyle, setInfoStyle] =useState("125")
  const [newOwner, setNewOwner] =useState({
    owner_id: '',
    id: set.id
  })

  const cardStyles = {
    margin: "5px",
    border: `solid ${set.owner.color} 3px`,
    display: "inline-grid"
  }

  const buttonStyles = {
      padding: "5px",
      color: "white",
      background: "#6A5ACD",
      width: "80px"
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

  
  // const showInfo = (e) => {
  //   console.log("should show card")
  //   setInfoStyle("400")
  // }
  // const hideInfo = (e) => {
  //   console.log("should hide card")
  //   setInfoStyle("125")
  // }
  return (
    <div style={cardStyles}>
     {/* onMouseEnter={showInfo} onMouseLeave={hideInfo} */}
      <a style={{margin: "auto"}}>
          <img style={{height: "120px", maxWidth: "150px"}} src={set.img} alt="No Image Available" />
      </a>
        <span className="content">
          <h3 style={{fontSize: "10px"}}>{set.name}</h3>
          {/* <p style={{paddingLeft: "15px"}}>Pieces: {set.pieces}</p>
          <p style={{paddingLeft: "15px"}}>Set Number: {set.set_number}</p> */}
          <button style={buttonStyles} onClick={toggleForm}>{toggleButtonText}</button>
          <form style={{visibility: showFormStyle}} onSubmit={handleNewOwnerSubmit}>
            <select name="owner_id" onChange={handleChange}>
              <option>New Owner</option>{ownersDropDown}
            </select>
            <input type="submit"/>
          </form>
        </span>
    </div>
  )
}

export default LegoSet

