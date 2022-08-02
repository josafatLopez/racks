import React from 'react'

const RackItem = ({ rack }) => {

  return (
    //<div className='rackItem' style={id === "0" ? {background: "red"} : {background: "green"}} >{idx}</div>
    //<div className='rackItem' >{rack.pallets.name} {rack.idx} <br />{rack.pallets.num}</div>
    <>
      {rack.pallets.map((pallet) => (
        <p className='rackItem' style={pallet.disponibility === '0' ? {background: 'red'} : {background: 'green'}} key={pallet.id}>{pallet.name} {pallet.num} <br />{pallet.idx} - {pallet.id}</p>
      ))}
    </>
  )
}

export default RackItem