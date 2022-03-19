import React, { useContext } from 'react'
import { MyContext } from './MyContext'
import LegoSet from './LegoSet'

const Owner = (props) => {
  const {legoSets, owners} = useContext(MyContext)

  const ownersSets = legoSets.filter(set => set.owner.name == props.match.params.name)

  const displaySets = ownersSets.map(x => <LegoSet key={x.id} set={x} />)

  // const owner = owners.find(owner => owner.id == props.match.params.id)



  return (
    <div style={{paddingLeft: "15px", paddingRight: "15px", paddingBottom: "15px"}}>
      <h3>{props.match.params.name}</h3>
      <div>{displaySets}</div>
    </div>
  )
}

export default Owner
