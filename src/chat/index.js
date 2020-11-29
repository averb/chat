import React from 'react';

import ChatHeader from './chat-header'
import ChatBody from './chat-body'
import ChatFooter from './chat-footer'

import './styles.css'

const Chat = () => (
  <div className="chat">
    <ChatHeader />
    <ChatBody />
    <ChatFooter />
  </div>
)

export default Chat