import React, { useContext, useState } from 'react'
import { MyContext } from './MyContext'

const OwnersDropDown = () => {
    const {owners} = useContext(MyContext)

    const ownersDropDown = owners.map(x => <option value="x.id">{x.name}</option>)

  return (
    <select>
        {ownersDropDown}
    </select>
  )
}

export default OwnersDropDown
