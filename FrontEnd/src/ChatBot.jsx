import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Generate or retrieve session ID
    const sessionId = localStorage.getItem('sessionId') || `user_${Date.now()}`;
    localStorage.setItem('sessionId', sessionId); // Save it locally for persistence

    // Add the df-messenger tag dynamically
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    const dfMessenger = document.createElement('df-messenger');
    dfMessenger.setAttribute('intent', 'WELCOME'); // Set default intent
    dfMessenger.setAttribute('chat-title', 'ChatBot');
    dfMessenger.setAttribute('agent-id', 'YOUR_AGENT_ID'); // Replace with your agent ID
    dfMessenger.setAttribute('language-code', 'en');
    dfMessenger.setAttribute('user-id', sessionId); // Pass session ID here

    document.body.appendChild(dfMessenger);
  }, []);

  return null; // No visible elements, just embeds the chatbot
};

export default ChatBot;
