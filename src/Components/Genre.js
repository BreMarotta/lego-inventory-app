import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import LegoSet from './LegoSet'
import GenreLink from './GenreLink'

const Genre = (props) => {
  const {legoSets} = useContext(MyContext)
  const id = props.match.params.id

  const genresSets = legoSets.filter(x => x.genre_id == id)

  const displaySets = genresSets.map(x => <LegoSet key={x.id} set={x} />)

  return (
    <div >
      <GenreLink />
      <div>{displaySets}</div>
    </div>
  )
}

export default Genre
