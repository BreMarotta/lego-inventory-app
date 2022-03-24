import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const ShowPage = (props) => {
  const {legoSets} = useContext(MyContext)

  const id = props.match.params.id
  const set = legoSets.find(s => s.id == id)

  return (
    <div style={{paddingLeft: "50px"}}>
      <a> 
        <img style={{height: "500px", float: "right", paddingRight: "150px"}} src={set.img} alt="No Image Available" />
      </a>
      <a>
        <h1 style={{paddingTop: "100px"}}>{set.name}</h1> <hr/>
        <h2>Official Piece Count: {set.pieces}</h2>
        <h2>Set Number: {set.set_number}</h2>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <h3>Current Owner: {set.owner.name}</h3>
      </a>
    </div>
  )
}

export default ShowPage
