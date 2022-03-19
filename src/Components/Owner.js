import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import LegoSet from './LegoSet'

const Owner = (props) => {
  const {legoSets} = useContext(MyContext)

  const ownersSets = legoSets.filter(set => set.owner.name == props.match.params.name)

  const displaySets = ownersSets.map(x => <LegoSet key={x.id.toString()} set={x} />)

  return (
    <div style={{paddingLeft: "15px", paddingRight: "15px", paddingBottom: "15px"}}>
      <h3>{props.match.params.name}</h3>
      {displaySets}
    </div>
  )
}

export default Owner
