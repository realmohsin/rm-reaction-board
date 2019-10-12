import React, { useContext } from 'react'
import Message from './Message'
import AppContext from '../AppContext'

const Messages = props => {
  const {
    state: { messages }
  } = useContext(AppContext)
  return (
    <section>
      {messages.map(message => {
        console.log('from messages map: ', message)
        return <Message key={message.id} message={message} />
      })}
    </section>
  )
}

export default Messages
