import React, { useState, useEffect } from 'react'

const RackItem = ({ rack }) => {
  const [pallets, setPallets] = useState([])
  const urlApi = 'https://josafatlopez.github.io/data/api'
  useEffect(() => {
      fetch(urlApi)
      .then(res => res.json())
      .then(data => setPallets(data))
      .catch(err => console.log(err))
    }, [])
    console.log(pallets.apiposition)
  return (
    //<div className='rackItem' style={id === "0" ? {background: "red"} : {background: "green"}} >{idx}</div>
    //<div className='rackItem' >{rack.pallets.name} {rack.idx} <br />{rack.pallets.num}</div>
    <>
      {rack.pallets.map((pallet) => (
        <p className='rackItem' style={JSON.stringify(pallet.position) === JSON.stringify(pallets.apiposition) ? {background: 'red'} : {background: 'green'}} key={pallet.id}>{pallet.name} {pallet.num} <br />{pallet.idx} - {pallet.id}</p>
      ))}
    </>
  )
}

export default RackItem