import React from 'react';
import classNames from 'classnames'

import ChatMessageGroup from './chat-message-group'
import './styles.css'

function Message(text, date, interlocutor) {
  this.text = text
  this.date = date
  this.interlocutor = interlocutor
}

function addZero(value) {
  return value < 10 ? `0${value}` : value
}

function getDate() {
  const date = new Date()
  const hours = addZero(date.getHours())
  const minutes = addZero(date.getMinutes())
  const seconds = addZero(date.getSeconds())

  return `${hours}:${minutes}:${seconds}`
}

const messages = [
  new Message('Lorem ipsum dolor sit amet consectetur, lorem ipsum dolor sit amet consectetur', getDate()),
  new Message('adipisicing elit', getDate()),
  new Message('Repellat, libero', getDate()),
  new Message('Lorem ipsum dolor sit amet.', getDate()),
  new Message('Quas dolor animi neque?', getDate(), true),
  new Message('Lorem ipsum dolor sit amet.', getDate(), true),
  new Message('Dolor beatae explicabo', getDate(), true),
  new Message('Lorem ipsum dolor sit amet.', getDate()),
  new Message('Lorem ipsum dolor sit amet', getDate()),
  new Message('Quas dolor animi neque?', getDate(), true),
  new Message('Dolor beatae explicabo', getDate(), true),
]

const groupedMessages = messages.reduce((acc, curr) => {
  const isInterlocutor = curr.interlocutor
  const user = isInterlocutor ? 'interlocutor' : 'admin'
  const lastItem = acc[acc.length - 1]

  if (!acc.length) {
    acc.push({ [user]: [curr] })
  } else if (!isInterlocutor && lastItem.admin) {
    lastItem.admin.push(curr)
  } else if (!isInterlocutor && !lastItem.admin) {
    acc.push({ [user]: [curr] })
  } else if (isInterlocutor && lastItem.interlocutor) {
    lastItem.interlocutor.push(curr)
  } else if (isInterlocutor && !lastItem.interlocutor) {
    acc.push({ [user]: [curr] })
  }

  return acc;
}, []);

const mappedMessages = groupedMessages.map((item, i) => {
  const messages = Object.values(item)[0]

  return (
    <ChatMessageGroup
      key={i}
      messages={messages}
      isInterlocutor={item.interlocutor}
    />
  )
})


const ChatBody = () => (
  <div className="chat-body">
    <div className="chat-body__messages">
      {mappedMessages}
    </div>
  </div>
)

export default ChatBody