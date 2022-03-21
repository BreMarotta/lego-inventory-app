import React, { useContext, useState } from 'react'
import { MyContext } from './MyContext'
import { Link } from 'react-router-dom'

const LegoSet = ({ set }) => {
  const {owners, updateSet} = useContext(MyContext)
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

  
  return (
    <Link key={set.id} to={`/lego_collection/${set.id}`} set={set} style={cardStyles}>
      <a style={{margin: "auto"}}>
          <img style={{height: "120px", maxWidth: "150px"}} src={set.img} alt="No Image Available" />
      </a>
        <span className="content">
          <h3 style={{fontSize: "10px"}}>{set.name}</h3>

          <button style={buttonStyles} onClick={toggleForm}>{toggleButtonText}</button>
          <form style={{visibility: showFormStyle}} onSubmit={handleNewOwnerSubmit}>
            <select name="owner_id" onChange={handleChange}>
              <option>New Owner</option>{ownersDropDown}
            </select>
            <input type="submit"/>
          </form>
        </span>
    </Link>
  )
}

export default LegoSet

