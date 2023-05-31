import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../Api/services/peer.";
import { useSocket } from "../Context/SocketProvider";
import 'react-tippy/dist/tippy.css';
import { BsFillCameraVideoFill } from "react-icons/bs";

import { IoCallSharp } from "react-icons/io5";




function Roompage() {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null)
  const [myStream, setMyStream] = useState(null)
  const [remoteStream, setRemoteStream] = useState(null)
  const handleUserJoined = useCallback(({ email, id }) => {

    setRemoteSocketId(id)
  }, []);
  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket])

  const handleIncommingCall = useCallback(async ({ from, offer }) => {
    setRemoteSocketId(from)
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });
    setMyStream(stream);
    const ans = await peer.getAnswer(offer)
    socket.emit('call:accepted', { to: from, ans })
  }, [socket])

  // const sendStreams = useCallback(() => {
  //   for (const track of myStream.getTracks()) {
  //     peer.peer.addTrack(track, myStream)
  //   }

  // }, [myStream])
  const sendStreams = useCallback(() => {
    if (myStream && peer.peer) {
      const senders = peer.peer.getSenders();
  
      for (const track of myStream.getTracks()) {
        let sender = senders.find((s) => s.track === track);
  
        if (!sender) {
          sender = peer.peer.addTrack(track, myStream);
        }
      }
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(({ from, ans }) => {
    peer.setLocalDescription(ans);

    sendStreams()

  }, [sendStreams])

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer()
    socket.emit('peer:nego:needed', { offer, to: remoteSocketId })
  }, [remoteSocketId, socket])

  useEffect(() => {
    peer.peer.addEventListener('negotiationneeded', handleNegoNeeded)
    return () => {
      peer.peer.removeEventListener('negotiationneeded', handleNegoNeeded)
    }
  }, [handleNegoNeeded])

  const handleNegoNeedIncomming = useCallback(async ({ from, offer }) => {
    const ans = await peer.getAnswer(offer)
    socket.emit('peer:nego:done', { to: from, ans })

  }, [socket])
  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans)

  }, [])

  useEffect(() => {
    peer.peer.addEventListener("track", async ev => {
      const remoteStream = ev.streams
      setRemoteStream(remoteStream[0])
    })
  }, [])
  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted)
    socket.on("peer:nego:needed", handleNegoNeedIncomming)
    socket.on("peer:nego:final", handleNegoNeedFinal)
    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted)
      socket.off("peer:nego:needed", handleNegoNeedIncomming)
      socket.off("peer:nego:final", handleNegoNeedFinal)
    };
  }, [handleCallAccepted, handleIncommingCall, handleNegoNeedFinal, handleNegoNeedIncomming, handleUserJoined, socket]);
  return <>
   
    <p className="flex justify-center mt-5 text-lg">{remoteSocketId ? "conected" : "no one in the room"}</p>
    {/* {
      remoteSocketId &&
      <button className="py-3 px-3 rounded-full text-white bg-green-600" onClick={handleCallUser}>call</button>
    } 
    {
      myStream && <button className="py-3 px-3 rounded-full text-white bg-blue-600" onClick={sendStreams} >send</button>
    } */}
{/*   
   {
      remoteStream && <ReactPlayer playing muted url={remoteStream} width="300px" height="200px" />
    } */}
  

   {/* Page Content */}
<div className="content">
  <div className="container-fluid">
    {/* Call Wrapper */}
    <div className="call-wrapper">
      <div className="call-main-row">
        <div className="call-main-wrapper">
          <div className="call-view">
            <div className="call-window">
              {/* Call Header */}
              <div className="fixed-header">
                <div className="navbar">
                  <div className="user-details">
                    <div className="float-left user-img">
                      <div className="avatar avatar-sm mr-2" >
                      
                        
                      </div>
                    </div>
              
                  </div>
               
                </div>
              </div>
              {/* /Call Header */}
              {/* Call Contents */}
              <div className="call-contents">
                <div className="call-content-wrap">
                  <div className="user-video">
                 
                   {
                     remoteStream && <ReactPlayer playing muted url={remoteStream} width="100%" height="100%" />
                   }
                    
                  </div>
                  <div className="my-video">
                    <ul>
                      <li>
                      { myStream && <ReactPlayer playing muted url={myStream} width="100%" height="100%" />}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Call Contents */}
              {/* Call Footer */}
              <div className="call-footer">
                <div className="call-icons">
                
                  <ul className="call-items">
                  {remoteSocketId && 
                   <li className="call-item" onClick={handleCallUser}>
                    <div className="rounded-full border-2 border-gray-400 w-12 h-12 flex justify-center items-center" title="Call" data-placement="top" data-toggle="tooltip">
                       <IoCallSharp/>
                      </div>

                    </li>
                  }
                  {
                    myStream &&    <li className="call-item"  >
                          <div className="rounded-full border-2 border-gray-400 w-12 h-12 flex justify-center items-center" title="Share Stream " data-placement="top" data-toggle="tooltip" onClick={sendStreams}>
                       <BsFillCameraVideoFill />
                      </div>
                    
                    </li>
                  }
                   
                 
                    {/* <li className="call-item">
                        <div className="rounded-full border-2 border-gray-400 w-12 h-12 flex justify-center items-center" title="Share " data-placement="top" data-toggle="tooltip">
                       <BsFillCameraVideoFill />
                      </div>
                      
                    </li> */}
               
                  </ul>
                  <div className="end-call">
                    <a href="javascript:void(0);">
                      <i className="material-icons">call_end</i>
                    </a>
                  </div>
                </div>
              </div>
              {/* /Call Footer */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Call Wrapper */}
  </div>
</div>		
{/* /Page Content */}

  </>;
}

export default Roompage;
