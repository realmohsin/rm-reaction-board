import React, { useContext } from 'react'
import AppContext from '../AppContext'

const EmojiList = ({ messageId }) => {
  const { state } = useContext(AppContext)
  console.log(state.reactionMap[messageId])
  return (
    <div>
      {state.reactionMap[messageId] &&
        state.reactionMap[messageId].map(reaction => (
          <span key={Math.random()} style={{ padding: '10px' }}>
            {reaction.username}: {reaction.emoji}
          </span>
        ))}
    </div>
  )
}

export default EmojiList
