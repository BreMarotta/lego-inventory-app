import React, { useContext, useState } from 'react'
import { MyContext } from './MyContext'

const AddLegoSetForm = () => {
  const {owners, genres} = useContext(MyContext)
  const [newSet, setNewSet] = useState({
    set_number: '',
    pieces: '',
    name: '',
    img: '',
  })

  const ownersDropDown = owners.map(x => <option value="x.id">{x.name}</option>)
  const genresDropDown = genres.map(x => <option value="x.id">{x.name}</option>)

  const handleChange = (e) => {
    setNewSet({
        ...newSet, [e.target.name]: e.target.value
    })
  }
  console.log(newSet)
  const formStyles = {
    color: "white",
    background: "#191970",
    borderBottom: "25px solid #191970",
    borderTop: "25px solid #191970",
    borderLeft: "35px solid #191970",
    borderRadius: "15px"
  }
  const inputStyles = {
    border: "2px solid #800000",
    borderRadius: "5px",
    width: "350px"
  }

  const handleNewSetSubmit = (e) => {
    e.preventDefault()
    const configurationObject = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify(newSet),
  };
  fetch(`http://localhost:9292/lego_sets`, configurationObject)
  .then(res => res.json())
  .then(data => console.log(data))
  }

  return (
    <div>
      <form onSubmit={handleNewSetSubmit}
      style={formStyles}>
        <label>Lego Set Name:</label><br/>
        <input name="name" onChange={handleChange}type="text" style={inputStyles}/><br/>
        <label>Lego Set Number:</label><br/>
        <input name="set_number" onChange={handleChange}type="text" style={inputStyles}/><br/>
        <label>Number of Pieces:</label><br/>
        <input name="pieces" onChange={handleChange}type="text" style={inputStyles}/><br/>
        <label>Image Link:</label><br/>
        <input name="img" onChange={handleChange}type="text" style={inputStyles}/><br/>
        <label style={{paddingLeft: "15px", paddingRight: "10px"}}>Owner:</label>
        <select >
          {ownersDropDown}
        </select>
        <label style={{paddingLeft: "35px", paddingRight: "10px"}}>Genre:</label>
        <select >
          {genresDropDown}
          <option value="newGenre">Other</option>
        </select><br/>
        <hr/>



        <input type="submit"/>

      </form>
    </div>
  )
}

export default AddLegoSetForm


// <select>
//   <option value="grapefruit">Grapefruit</option>
//   <option value="lime">Lime</option>
//   <option selected value="coconut">Coconut</option>
//   <option value="mango">Mango</option>
// </select>