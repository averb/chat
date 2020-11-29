import React from 'react';
import classNames from 'classnames'

import ChatMessage from '../chat-message'
import Logo from '../../images/logo.png'

import './styles.css'

const ChatMessageGroup = ({ isInterlocutor, messages }) => (
  <div
    className={classNames({
      'chat-message-group': true,
      'chat-message-group--interlocutor': isInterlocutor,
    })}
  >
    {isInterlocutor && (
      <img src={Logo} className="chat-message-group__avatar" alt="" />
    )}
    <div className="chat-message-group__messages">
      {messages.map((message, i) => {
        const { text, date, interlocutor } = message
        return (
          <ChatMessage
            key={i}
            text={text}
            date={date}
            interlocutor={interlocutor}
          />
        )
      })}
    </div>
  </div>
)

export default ChatMessageGroup