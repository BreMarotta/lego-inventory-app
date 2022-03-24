import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const Home = () => {
  const {owners} = useContext(MyContext)

  const ownerInfo = owners.map(p => <div>
    <p style={{fontSize: "25px"}}><strong>{p.name}</strong></p>
    <p>Favorite Lego Categories: {p.favorite_genres}</p>
    <hr/>
  </div>
 )
  return (
    <div style={{paddingLeft: "35px", paddingRight: "35px"}}>
      <p style={{paddingLeft: "50px", paddingRight: "50px"}}><strong>Welcome to our Lego Set Inventory! </strong> Use the links above to view our collection. As you click through each family member, you can see their personal Lego sets. You can also filter the collection by genre. If you want to see if we own a certain set, please use the search bar. You can add a set to the collection by clicking the "Add Lego Set" button and completing the form. You can trade sets between owners by clicking the button rendered on each set's card. Finally, if you would like a closer look at a certain, click on the image to view the show page.</p>
      {ownerInfo}
      
    </div>
  )
}

export default Home
