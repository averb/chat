import React from 'react';

import Logo from '../images/logo.png'
import './styles.css'

const ChatHeader = () => (
  <div className="chat-header">
    <img src={Logo} className="chat-header__img" alt="elixirator" />
    <span className="chat-header__name">Elixirator</span>
  </div>
)

export default ChatHeader