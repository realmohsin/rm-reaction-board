import uuid from 'uuid/v4'
import { SET_USERNAME, ADD_MESSAGE, ADD_REACTION } from './types'

export const setUsername = username => ({ type: SET_USERNAME, username })

export const addMessage = (text, username) => ({
  type: ADD_MESSAGE,
  message: {
    text,
    createdBy: username,
    createdAt: new Date(),
    id: uuid()
  }
})

export const addReaction = (messageId, emoji, username) => ({
  type: ADD_REACTION,
  messageId,
  reaction: {
    emoji,
    username
  }
})
