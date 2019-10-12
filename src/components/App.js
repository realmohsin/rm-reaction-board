import React, { useReducer, useState, useEffect } from 'react'
import reducer, { initialState } from '../state/reducer'
import { setUsername, addMessage, addReaction } from '../state/actions'
import Messages from './Messages'
import AppContext from '../AppContext'
import PubSub from '../pubsub'

const pubsub = new PubSub()

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [rawMessage, setRawMessage] = useState('')

  useEffect(() => {
    pubsub.addListener({
      message: res => {
        console.log(res)
        dispatch(res.message)
      }
    })
  }, [])

  const handleAddMessage = () => {
    pubsub.publish(addMessage(rawMessage, state.username))
    setRawMessage('')
  }

  const handleKeyPress = e => e.key === 'Enter' && handleAddMessage()

  const handleAddReaction = (messageId, emoji) =>
    pubsub.publish(addReaction(messageId, emoji, state.username))

  return (
    <AppContext.Provider value={{ state, handleAddReaction }}>
      <h1>REACTION</h1>
      <section>
        <p>{state.username}</p>
        Set Username:{' '}
        <input
          value={state.username}
          onChange={e => dispatch(setUsername(e.target.value))}
        />
      </section>
      <hr />
      <section>
        <h4>Enter Message to the Board</h4>
        <input
          value={rawMessage}
          onChange={e => setRawMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddMessage}>Publish</button>
      </section>
      <Messages />
    </AppContext.Provider>
  )
}

export default App
