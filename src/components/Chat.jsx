import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import logo from "../logo_white.png"
import './css/Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessage = { sender: 'user', text: input };
      setMessages([...messages, newMessage]);

      try {
        const response = await axios.post('http://localhost:8000/chat', { query: input, session_id: userName });
        const botMessage = { sender: 'bot', text: response.data.answer };
        setMessages([...messages, newMessage, botMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
      }

      setInput('');
    }
  };

  const userName = localStorage.getItem('username');

  useEffect(() => {

    const token = localStorage.getItem('token');
    if (token == null) {
      navigate('/login');
    }


    console.log(userName)
    const welcomeMessage = `Hello ${userName}! 👋 \n
    
    Welcome to the Villa Santa Teresa support chat! 🏖️ How can I assist you today? Whether you need information about our amenities, booking details, local attractions, or any other assistance, I'm here to help.
    
    Thank you for choosing Villa Santa Teresa for your stay! 🌴`


    const formattedMessage = welcomeMessage.split('\n').map((str, index) => <p key={index}>{str}</p>);
    const newMessage = { sender: 'bot', text: formattedMessage };
    setMessages([...messages, newMessage]);



    // Fetch chat history
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/chat_history', {
          params: { session_id: userName },
        });
        const chatHistory = response.data.map((msg, index) => ({
          sender: msg.type === 'human' ? 'user' : 'bot',
          text: msg.text,
        }));
        setMessages(prevMessages => [...prevMessages, ...chatHistory]);
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };

    fetchChatHistory();

  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Redirect to homepage or login page
  };



  return (
    <>

      <nav className="navbar justify-content-between">
        <a className="navbar-brand mr-5" style={{ marginLeft: "30px" }}>
          <img src={logo} style={{ width: "60px" }} alt="" />
        </a>
        <div className='mr-5'>
          <button className="selected-button">Chat</button>
          {userName == 'admin' &&
            <>

              <Link to="/users">
                <button className="upload-button">Users</button>
              </Link>
              <Link to="/upload">
                <button className="upload-button">Upload Documents</button>
              </Link>
              

            </>
          }
          <button className="upload-button mr-5" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="chat-container">
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input type="file" className="file-input" />
          <input
            type="text"
            className="text-input"
            placeholder="Message Neuron Service"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <div className="send-icon">
            <button className="send-button" onClick={sendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
