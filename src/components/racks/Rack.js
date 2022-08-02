import React, { useState, useEffect } from 'react'
import RackItem from './RackItem'

const Rack = () => {
  const [racks, setRacks] = useState([])
  const [pallets, setPallets] = useState([])
  const url = 'https://josafatlopez.github.io/data/rolandi-racks'
  const urlApi = 'https://api.owltracking.com.mx/norson/position/A/1'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setRacks(data))
      .catch(err => console.log(err))

      fetch(urlApi)
      .then(res => res.json())
      .then(data => setPallets(data))
      .catch(err => console.log(err))
    }, [])
    // eslint-disable-next-line array-callback-return
    pallets.map(pallet => {
      console.log(racks.filter(x => x.position.toString() === pallet.Position.toString()))
    });
  //console.log(racks)
  return (
    <div className='container flexContainer'>
      {racks.map((rack) => (
        <div className="flexReverse w20" key={rack.idx}>
          <RackItem
            rack={rack}
          />
        </div>
      ))}
    </div>
  )
}

export default Rack