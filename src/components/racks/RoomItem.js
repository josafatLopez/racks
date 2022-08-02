import React from 'react'
import { Link } from 'react-router-dom'

const RoomItem = ({ room }) => {
  return (
    <>
      {room.frontpallets.map((pallet) => (
        <Link className='roomItem' to="/" key={pallet.name}>{pallet.name}</Link>
      ))}
    </>
  )
}

export default RoomItem