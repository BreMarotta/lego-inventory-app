import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import LegoSet from './LegoSet'
import GenreLink from './GenreLink'

const LegoCollection = () => {
  const {legoSets} = useContext(MyContext)

  const displaySets = legoSets.map(s => <LegoSet key={s.id} set={s}/>)

  return (
    <div>
      <GenreLink />
      <h2>Family Collection</h2>
      {displaySets}
    </div>
  )
}

export default LegoCollection

