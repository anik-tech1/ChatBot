import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    setResponse(""); // Clear previous response while loading

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error("error:", error);
      setResponse("❌ Error getting response from AI. Make sure your local server is running.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="app-wrapper">
      <div className="chat-container">

        <header className="chat-header">
          <div className="header-icon">🤖</div>
          <h1>Local AI Chat</h1>
          <p className="subtitle">Powered by Qwen 2.5</p>
        </header>

        <main className="chat-display">
          {response ? (
            <div className="message-bubble ai-response fade-in">
              <span className="label">AI</span>
              <p>{response}</p>
            </div>
          ) : isLoading ? (
            <div className="message-bubble ai-response loading-pulse">
              <span className="label">AI</span>
              <div className="typing-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
          ) : (
            <div className="empty-state fade-in">
              <div className="sparkle-icon">✨</div>
              <p>How can I help you today?</p>
            </div>
          )}
        </main>

        <footer className="chat-input-area">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message... (Press Enter to send)"
            disabled={isLoading}
          ></textarea>
          <button
            onClick={sendMessage}
            disabled={isLoading || !message.trim()}
            className={isLoading ? "loading-btn" : ""}
          >
            {isLoading ? <div className="spinner"></div> : "Send ↗"}
          </button>
        </footer>

      </div>
    </div>
  );
}

export default App;