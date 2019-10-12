import PubNub from 'pubnub'
import pubnubConfig from './pubnub.config.json'

const channel = 'REACTION_MESSAGES'

function PubSub () {
  const pubnub = new PubNub(pubnubConfig)

  pubnub.subscribe({ channels: [channel] })

  this.addListener = listenerConfig => {
    pubnub.addListener(listenerConfig)
  }

  this.publish = actionObj => {
    pubnub.publish({
      message: actionObj,
      channel
    })
  }
}

export default PubSub
