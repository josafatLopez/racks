import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RackItem = ({ rack }) => {
  const [pallets, setPallets] = useState([])
  const { room, rackNum } = useParams()
  const urlApi = `https://api.owltracking.com.mx/norson/position/${room}/${rackNum}`
  useEffect(() => {
      fetch(urlApi)
      .then(res => res.json())
      .then(data => setPallets(data))
      .catch(err => console.log(err))
    }, [])
    console.log(pallets)
  return (
    <>
      {rack.pallets?.ID==undefined ? rack.pallets.map((pallet) => (<div className="palletContainer" key={pallet.id}>
        <div className="pallet" style={JSON.stringify(pallet.position) === JSON.stringify(pallets.position) ? {background: 'red'} : {background: 'green'}}>
          <p className="palletName">{pallet.name}</p>
          <span className="palletPosition">{pallet.position}</span>
        </div>
        <div className="palletFloor">
          <span className="palletDivision"></span>
          <span className="palletDivision"></span>
          <span className="palletDivision"></span>
        </div>
      </div>
      )) : <div></div>}
    </>
  )
}

export default RackItem