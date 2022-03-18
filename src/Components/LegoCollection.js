import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import LegoSet from './LegoSet'

const LegoCollection = () => {
  const {legoSets} = useContext(MyContext)
  console.log(legoSets)

  const displaySets = legoSets.map(s => <LegoSet key={s.id} set={s}/>)
  return (
    <div>
      <h2>Lego Collection</h2>
      {displaySets}
    </div>
  )
}

export default LegoCollection

