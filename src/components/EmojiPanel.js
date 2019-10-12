import React, { useContext } from 'react'
import AppContext from '../AppContext'
import EMOJI_DATA from '../data'

const EmojiPanel = ({ messageId }) => {
  const { handleAddReaction } = useContext(AppContext)

  return (
    <div>
      {EMOJI_DATA.map(emojiObj => (
        <span
          onClick={() => handleAddReaction(messageId, emojiObj.emoji)}
          style={{ margin: '0 10px', cursor: 'pointer' }}
          key={emojiObj.type}
        >
          {emojiObj.emoji}
        </span>
      ))}
    </div>
  )
}

export default EmojiPanel
