import React from 'react'

const Owner = (props) => {

  return (
    <div>{props.match.params.id}</div>
  )
}

export default Owner
