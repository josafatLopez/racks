import React, { useState, useEffect } from 'react'
import RoomItem from './RoomItem'

const Room = () => {
   const [rooms, setRooms] = useState([])
   const url = 'https://josafatlopez.github.io/data/rooms'
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
            <div className="flexReverse" key={room.room}>
               <RoomItem
                  room={room}
               />
            </div>
         ))}
         <div className="lateralOne">
            <p className='verticalText'>Pasillo</p>
         </div>
         <div className="wall"></div>
         <div className="lateralTwo">
            <p className='verticalText'>Pasillo</p>
         </div>
      </div>
   )
}

export default Room