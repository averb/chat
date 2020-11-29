import React, { useState } from 'react';

import './styles.css'

const ChatFooter = () => {
  const [value, setValue] = useState('')

  return (
    <div className="chat-footer">
      <textarea
        rows="2"
        className="chat-footer__textarea"
        placeholder="Type a message..."
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="button"
        className="chat-footer__button"
        disabled={!value}
      >
        Send
      </button>
    </div>
  )
}

export default ChatFooter