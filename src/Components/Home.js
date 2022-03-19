import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const Home = () => {
  const {owners} = useContext(MyContext)
  console.log(owners)
  const ownerInfo = owners.map(p => <div>
    <hr/>
    <h2 >{p.name}</h2>
    <h5>{p.description}</h5>
  </div>
 )
  return (
    <div style={{paddingLeft: "35px", paddingRight: "35px"}}>
      <p>Our family's history with Lego began in the early 90s when Carmen received his first set. More talking and so many words about this site. It was so fun to build! Yahoo. My kids even enjoyed adding their Lego sets to our family collection.</p>
      {ownerInfo}
    </div>
  )
}

export default Home
