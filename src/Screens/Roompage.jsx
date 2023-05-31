import React, { useEffect, useCallback, useState } from "react";
import { useSocket } from "../Context/SocketProvider";

function Roompage() {
  const socket = useSocket();
  const [remoteSocketId,setRemoteSocketId] =useState(null)
  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`email: ${email} joined  the room`);
    setRemoteSocketId(id)
  }, []);
  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    return () => {
      socket.off("user:joined", handleUserJoined);
    };
  }, [handleUserJoined, socket]);
  return <>
    <h1>Room Page</h1>
    <p>{remoteSocketId ? "conected" : "no one in the room"}</p>
  </>;
}

export default Roompage;
