import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import LegoSet from './LegoSet'

const Genre = (props) => {
  const {genres, legoSets} = useContext(MyContext)
  const id = props.match.params.id


  const genresSets = legoSets.filter(x => x.genre_id == id)

  const displaySets = genresSets.map(x => <LegoSet key={x.id} set={x} />)

  return (
    <div style={{paddingLeft: "15px", paddingRight: "15px", paddingBottom: "15px"}}>
      <h3>{props.match.params.name}</h3>
      <div>{displaySets}</div>
    </div>
  )
}

export default Genre
