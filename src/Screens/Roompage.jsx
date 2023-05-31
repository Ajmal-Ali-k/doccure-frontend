import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../Api/services/peer.";
import { useSocket } from "../Context/SocketProvider";

function Roompage() {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null)
  const [myStream, setMyStream] = useState(null)
  const [remoteStream,setRemoteStream]=useState(null)
  const handleUserJoined = useCallback(({ email, id }) => {

    setRemoteSocketId(id)
  }, []);
  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });
    const offer = await peer.getOffer();
    socket.emit("user:call",{to:remoteSocketId,offer});
    setMyStream(stream);
  }, [remoteSocketId, socket])

  const handleIncommingCall = useCallback(async({from, offer})=>{
    setRemoteSocketId(from)
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });
    setMyStream(stream);
    const ans = await peer.getAnswer(offer)
    socket.emit('call:accepted',{to:from,ans})
  },[socket])

  const sendStreams = useCallback(()=>{
    for( const track of myStream.getTracks()){
      peer.peer.addTrack(track,myStream)
    }

  },[myStream])

  const handleCallAccepted =useCallback(({from,ans})=>{
    peer.setLocalDescription(ans);

    sendStreams()

  },[sendStreams])

const handleNegoNeeded = useCallback(async ()=>{
  const offer = await peer.getOffer()
  socket.emit('peer:nego:needed',{offer,to:remoteSocketId})
 },[remoteSocketId, socket])
   
  useEffect(()=>{
    peer.peer.addEventListener('negotiationneeded',handleNegoNeeded)
    return ()=>{
      peer.peer.removeEventListener('negotiationneeded',handleNegoNeeded)
    }
  },[handleNegoNeeded])

  const handleNegoNeedIncomming =  useCallback(async({from,offer})=>{
    const ans =await peer.getAnswer(offer)
    socket.emit('peer:nego:done',{to:from,ans})

  },[socket])
  const handleNegoNeedFinal = useCallback(async ({ans})=>{
    await peer.setLocalDescription(ans)

  },[])

  useEffect(()=>{
      peer.peer.addEventListener("track",async ev =>{
        const remoteStream = ev.streams
        setRemoteStream(remoteStream[0])
      })
  },[])
  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call",handleIncommingCall);
    socket.on("call:accepted",handleCallAccepted)
    socket.on("peer:nego:needed",handleNegoNeedIncomming)
    socket.on("peer:nego:final",handleNegoNeedFinal)
    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call",handleIncommingCall);
      socket.off("call:accepted",handleCallAccepted)
      socket.off("peer:nego:needed",handleNegoNeedIncomming)
      socket.off("peer:nego:final",handleNegoNeedFinal)
    };
  }, [handleCallAccepted, handleIncommingCall, handleNegoNeedFinal, handleNegoNeedIncomming, handleUserJoined, socket]);
  return <>
    <h1>Room Page</h1>
    <p>{remoteSocketId ? "conected" : "no one in the room"}</p>
    {
      remoteSocketId &&
      <button className="py-3 px-3 rounded-full text-white bg-green-600" onClick={handleCallUser}>call</button>
    }
    {
      myStream && <button className="py-3 px-3 rounded-full text-white bg-blue-600" onClick={sendStreams} >send</button>
    }
    {
      myStream && <ReactPlayer playing muted url={myStream} width="300px" height="200px" />
    }
    {
      remoteStream && <ReactPlayer playing muted url={remoteStream} width="300px" height="200px" />
    }
  </>;
}

export default Roompage;
