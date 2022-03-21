import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const ShowPage = (props) => {
    const {legoSets} = useContext(MyContext)
    console.log(props)
    const id = props.match.params.id
    console.log(id)

    const setArray = legoSets.filter(s => s.id == id)

    console.log(setArray)
    const display = setArray[0]
    console.log(display)
  return (
    <div style={{paddingLeft: "50px"}}>
        <a> 
          <img style={{height: "500px", float: "right", paddingRight: "150px"}} src={display.img} alt="No Image Available" />
        </a>
        <a>
            <h1 style={{paddingTop: "100px"}}>{display.name}</h1> 
            <h2>Official Piece Count: {display.pieces}</h2>
            <h2>Set Number: {display.set_number}</h2>
        </a>
    </div>
  )
}

export default ShowPage
