import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import LegoSet from './LegoSet'

const Owner = (props) => {
  const {legoSets, owners} = useContext(MyContext)

  const ownersSets = legoSets.filter(set => set.owner_id == props.match.params.id)

  const displaySets = ownersSets.map(x => <LegoSet key={x.id} set={x} />)

  const owner = owners.find(owner => owner.id == props.match.params.id)
  console.log(owner)

  return (
    <div style={{paddingLeft: "15px", paddingRight: "15px", paddingBottom: "15px"}}>
      <h2> {owner.name}</h2>
      <div>{displaySets}</div>
    </div>
  )
}

export default Owner
