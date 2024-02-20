// Chat.jsx
import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // You can implement your real-time chat logic here, such as using sockets or a backend service.

    // For demonstration purposes, let's simulate receiving a message after a delay.
    const simulateMessage = setTimeout(() => {
      const receivedMessage = {
        user: 'Admin',
        text: 'Welcome to the chat!',
      };
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    }, 2000);

    return () => clearTimeout(simulateMessage);
  }, []); // The empty dependency array ensures that this effect runs only once on mount.

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newChatMessage = {
        user: 'Player', // You can customize this based on your user authentication
        text: newMessage.trim(),
      };
      setMessages((prevMessages) => [...prevMessages, newChatMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 p-4 rounded-md">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold text-yellow-500">{message.user}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 mr-2 bg-gray-700 rounded-md text-white"
        />
        <button
          onClick={handleSendMessage}
          className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
