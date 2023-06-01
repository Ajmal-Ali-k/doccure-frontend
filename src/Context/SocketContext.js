import React, { createContext, useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

const socket = io("https://localhost:8080");

const ContextProvider = ({ children }) => {
  const location = useLocation();

  const conversation = location?.state?.conversationId;
  const fname = location?.state?.name;

  const [stream, setStream] = useState(null);
  const [me, setMe] = useState("");
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const [callTo, setCallTo] = useState("");

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(()=>{
    socket.on("callended", () => {
      console.log('call Ended')
      setCallEnded(true);
      connectionRef.current.destroy();
      window.location.reload();
    });
  })

  useEffect(() => {
    console.log("this is context")
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });
    socket.emit("me", conversation);
    setMe(conversation);
    setName(fname);
    socket.on("calluser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivedCall: true, from, name: callerName, signal });
      myVideo.current.srcObject = stream;
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("answercall", { signal: data, to: call.from });
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
      myVideo.current.srcObject = stream
    });
    peer.signal(call.signal);
    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("calluser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on("callaccepted", (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
  const leaveCall = () => {
    setCallEnded(true);
    socket.emit("callended", conversation);
    connectionRef.current.destroy();
    window.location.reload();
  };
  return (
    <SocketContext.Provider
      value={{ call, callAccepted, myVideo, userVideo, stream, setCallTo, callTo, name, setName, callEnded, me, callUser, leaveCall, answerCall,}} >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };