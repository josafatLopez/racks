import React, { useState, useEffect } from 'react'
import RackItem from './RackItem'

const Rack = () => {
  const [racks, setRacks] = useState([])
  const url = 'https://josafatlopez.github.io/data/racks'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setRacks(data))
      .catch(err => console.log(err))
    }, [])

  return (
    <div className='container flexContainer'>
      {racks.map((rack) => (
        <div className="flexReverse" key={rack.idx}>
          <RackItem
            rack={rack}
          />
        </div>
      ))}
    </div>
  )
}

export default Rack