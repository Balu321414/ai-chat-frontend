import React, { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!inputText) return;

    setMessages([...messages, `You: ${inputText}`]);
    setInputText("");

    try {
      const response = await axios.post("http://localhost:3001/api/chat", {
        userMessage: inputText,
      });

      setMessages([...messages, `AI Bot : ${response.data}`]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="body">
      <div className="aa">
        <h1><u>AI Chat APP</u></h1>
        <div className="chat-container">
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
