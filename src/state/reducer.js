import { SET_USERNAME, ADD_MESSAGE, ADD_REACTION } from './types'

export const initialState = {
  username: 'Anonymous',
  messages: [],
  reactionMap: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.username
      }
    case ADD_MESSAGE:
      console.log(action.message)
      return {
        ...state,
        messages: state.messages.concat(action.message)
      }
    case ADD_REACTION:
      const reactionMap = { ...state.reactionMap }
      let reactionList = reactionMap[action.messageId] || []
      reactionMap[action.messageId] = reactionList.concat(action.reaction)
      return {
        ...state,
        reactionMap
      }
    default:
      return state
  }
}

export default reducer
