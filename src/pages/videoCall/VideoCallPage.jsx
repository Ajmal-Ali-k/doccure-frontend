import React from 'react'
import VideoCallComponents from '../../components/videoCall/VideoCallComponents'
// import { ContextProvider } from '../../Context/SocketContext'

function VideoCallPage() {
  return (
    <div>
    {/* <ContextProvider>   */}
      <VideoCallComponents/>
    {/* </ContextProvider> */}
    </div>
  )
}

export default VideoCallPage
