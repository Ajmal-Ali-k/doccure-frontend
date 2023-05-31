
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSocket} from "../Context/SocketProvider"

function Lobby() {
  const socket = useSocket()

  const navigate = useNavigate()
  const [email,setEmail]= useState("")
  const [room,setRoom]= useState("")
  const handleSubmit =useCallback((e)=>{
    e.preventDefault()
  socket.emit("room:join",{email,room})

  },[email, room, socket]) 
  const handleJoinRoom = useCallback((data)=>{
    const {email,room}=data
    console.log(email,room);
    navigate(`/doctor/room/${room}`)

  },[])
  useEffect(()=>{
    socket.on('room:join',handleJoinRoom)
    return ()=>{
      socket.off('room:join',handleJoinRoom)
    }
  },[handleJoinRoom, socket])
  return (
    <div>

      <form  className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
        <label for="email" >email</label>
        <input type='email' className='rounded-md' id='email' value={email} onChange={e =>setEmail(e.target.value)}/>
        <label for="room"  >room id</label>
        <input  type="text" className='rounded-md' id='room' value={room} onChange={e =>setRoom(e.target.value)}/>
        <button type='submit' className='bg-blue-500 px-2 py-2 mt-4 rounded-md text-white'>Join</button>
      </form>
    </div>
  )
}

export default Lobby
