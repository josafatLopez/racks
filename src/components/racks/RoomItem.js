import React from 'react'
import { Link } from 'react-router-dom'

const RoomItem = ({ room }) => {

  return (
    <>
      {room.frontpallets.map((pallet) => (
        <Link className='roomItem' to={`/${Array.from(pallet.name)[0]}/${Array.from(pallet.name)[1]}`} key={pallet.name}>{pallet.name}</Link>
      ))}
    </>
  )
}

export default RoomItem