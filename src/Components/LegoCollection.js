import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import LegoSet from './LegoSet'

const LegoCollection = () => {
  const {legoSets} = useContext(MyContext)
  

  const displaySets = legoSets.map(s => <LegoSet key={s.id} set={s}/>)
  return (
    <div style={{paddingLeft: "15px", paddingRight: "15px", paddingBottom: "15px"}}>
      <h2>Lego Collection</h2>
      {displaySets}
    </div>
  )
}

export default LegoCollection

