import React from 'react';
import classNames from 'classnames'

import './styles.css'

const ChatMessage = ({ text, date, interlocutor }) => (
  <div
    className={classNames({
      'chat-message': true,
      'chat-message--interlocutor': interlocutor,
    })}
  >
    <span className="chat-message__text">{text}</span>
    <span className="chat-message__date">{date}</span>
  </div>
)

export default ChatMessage