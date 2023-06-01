import React, { useEffect, useRef, useState } from "react";
import { message } from "antd";
import Message from "./Message";
import Contact from "./Contact";

import {
  getConversationApi,
  getMessagesApi,
  postNewMessagesApi,
} from "../../../../Api/services/Conversation";
import { useSelector } from "react-redux";
import { GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { useSocket } from "../../../../Context/SocketProvider";

function ChatPage() {
  const socketio = useSocket()
  const clientToken = useSelector((state) => state.clientLogin.token);
  const DoctorToken = useSelector((state) => state.doctorLogin.token);
  const navigate = useNavigate();

  let token = clientToken ? clientToken : DoctorToken;

  const [conversation, setConversation] = useState([]);
  const [currentChat, setcurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage,setArrivalMessage] = useState(null)
  const [userId, setuserId] = useState("");
  // const [socket,setSocket]=useState(null)
  const socket = useRef();
  const scrollRef = useRef();
  useEffect(() => {
    // socket.current = io("ws://localhost:8080");
    socket.current =socketio
    socket.current.on("getMessage",data =>{
      setArrivalMessage({
        sender:data.sender,
        text:data.text,
        createdAt:Date.now()

      })
      
    })
  }, []);
  useEffect(()=>{
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
    setMessages(prev=>[...prev,arrivalMessage])

  },[arrivalMessage,currentChat])
console.log(userId,"thisisi user id")
  useEffect(() => {
    socket.current.emit("addUser",userId);
    socket.current.on("getUser",(users) => {
      console.log(users, "thsis is usressssssss");
    });
  }, [token]);

  const getconversatiion = async (req, res) => {
    try {
      const response = await getConversationApi(token);
      if (response.data.success) {
        setConversation(response.data.conversation);
        setuserId(response.data.userId);
      } else {
        message.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
      message.error(error.message);
    }
  };

  useEffect(() => {
    getconversatiion();
  }, [token]);

  //this is geting messages
  const getMessages = async () => {
    try {
      const response = await getMessagesApi(currentChat?._id, token);
      setMessages(response.data.messages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: userId,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const recieverId = currentChat.members.find(member => member !== userId)
    console.log(recieverId,"this is   reciever id")
    socket.current.emit("sendMessage",{
      senderId:userId,
      recieverId,
      text:newMessage

    })
    try {
      const response = await postNewMessagesApi(message, token);
      if (response.data.success) {
        setMessages([...messages, response.data.savedMessage]);
        setNewMessage("");
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="">
      <div class=" w-full  shadow-lg border-t rounded-lg ">
        <div class="flex flex-row h-screen  justify-between bg-white ">
          <div class="flex pt-16 flex-col w-2/6 border-r-2 overflow-y-auto">
            <div className="ml-4" onClick={handleNavigate}>
              <GrLinkPrevious />
            </div>
            <div class="border-b-2  py-4 px-2">
              <input
                type="text"
                placeholder="search "
                class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>
            {conversation &&
              conversation.map((c) => (
                <div onClick={() => setcurrentChat(c)}>
                  <Contact
                    conversation={c}
                    currentuser={userId}
                    token={token}
                  />
                </div>
              ))}
          </div>

          <div class="flex flex-col w-full flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                  <div class="flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg overflow-hidden">
                    {currentChat ? (
                      <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
                        {messages &&
                          messages.map((m) => (
                            <div ref={scrollRef}>
                              <Message messages={m} own={m.sender === userId} />
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center text-4xl text-gray-400  cursor-default m-auto">
                        Open a Conversation to Start a chat.{" "}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {currentChat ? (
                <>
                  <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                    <div>
                      <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                        <svg
                          class="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          ></path>
                        </svg>
                      </button>
                    </div>

                    <div class="flex-grow ml-4">
                      <div class="relative w-full">
                        <input
                          type="text"
                          onChange={(e) => setNewMessage(e.target.value)}
                          value={newMessage}
                          onKeyUp={(e)=>{
                                e.key === 'Enter' && handleSubmit(e)
                              }}
                          class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                        />
                        <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="ml-4">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                      >
                        <span>Send</span>
                        <span class="ml-2">
                          <svg
                            class="w-4 h-4 transform rotate-45 -mt-px"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
