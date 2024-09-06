import React from "react";
import Header from "./Header";

const conversations = [
  {
    id: 1,
    name: "Hugo Lloris",
    lastMessage: "Appointment delay doctor..",
    time: "2 min ago",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Mauris auctor",
    lastMessage: "Can we have meeting now??",
    time: "2:30 PM",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Michael Owen",
    lastMessage: "I need your help doctor",
    time: "1:30 PM",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Amina Smith",
    lastMessage: "How are you doing??",
    time: "Yesterday",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 5,
    name: "Minah Khan",
    lastMessage: "Delete all patient data",
    time: "12/04/2024",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 6,
    name: "Alex Morgan",
    lastMessage: "Waiting for your reply",
    time: "11/04/2024",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const messages = [
  {
    sender: "Minah mmassy",
    content: "Morning Dr. Daudi 🙌🙌",
    time: "12:00 PM",
  },
  { sender: "You", content: "Morning, how are you doing", time: "12:02 PM" },
  {
    sender: "Minah mmassy",
    content: "I’m doing well... is patient 23 room available?",
    time: "12:05 PM",
  },
  { sender: "You", content: "She is available, dear...", time: "12:06 PM" },
];

const Messages = () => {
  return (
    <>
      <Header param="Messages" />
      <div className="flex h-screen">
        {/* Conversations Sidebar */}
        <div className="w-1/4 bg-white border-r">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Messages</h2>
          </div>
          <ul>
            {conversations.map((conversation) => (
              <li
                key={conversation.id}
                className="p-4 border-b cursor-pointer hover:bg-gray-100 flex items-center"
              >
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-semibold">{conversation.name}</span>
                    <span className="text-sm text-gray-500">
                      {conversation.time}
                    </span>
                  </div>
                  <p className="text-gray-600">{conversation.lastMessage}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Messages Display */}
        <div className="flex-1 flex flex-col">
          {/* Conversation Header */}
          <div className="p-4 border-b bg-white flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Minah mmassy"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">Minah mmassy</h2>
              <span className="text-sm text-gray-500">Active 4hr ago</span>
            </div>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  message.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "You"
                      ? "bg-blue-500 text-white"
                      : "bg-white border"
                  }`}
                >
                  <p>{message.content}</p>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t">
            <form className="flex">
              <input
                type="text"
                className="flex-1 border rounded-l-lg p-2 focus:outline-none"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 rounded-r-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
