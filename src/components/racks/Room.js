import React, { useState, useEffect } from 'react'
import RoomItem from './RoomItem'

const Room = () => {
   const [rooms, setRooms] = useState([])
   const url = 'https://josafatlopez.github.io/data/rolandi'
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setRooms(data))
         .catch(err => console.log(err))
   }, [])
   console.log(rooms)
   return (
      <div className='container flexContainer'>
         {rooms.map((room) => (
            <div className="flexReverse w20" key={room.room}>
               <RoomItem
                  room={room}
               /> 
            </div>
         ))}
      </div>
   )
}

export default Room