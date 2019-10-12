import React from 'react'
import EmojiPanel from './EmojiPanel'
import EmojiList from './EmojiList'

const Message = ({ message }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid black', margin: '15px' }}>
      <h5>{message.createdAt.toString()}</h5>
      <EmojiList messageId={message.id} />
      <p>{message.text}</p>
      <p>
        <strong>-- {message.createdBy}</strong>
      </p>
      <EmojiPanel messageId={message.id} />
    </div>
  )
}

export default Message
