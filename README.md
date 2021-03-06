<div align="center">
  <img alt="Logo" src="https://image.flaticon.com/icons/png/512/1127/premium/1127271.png" width="100" />
</div>
<h1 align="center">
  Reaction
</h1>

Reaction is a text-board that allows users to react to messages in real time. It uses [PubNub](https://pubnub.com) to implement the Publish-Subscribe software pattern.

PubNub allows the creation of a channel that client instances can subscribe and publish to. To add something to the message board, an action object is published to the channel. Each subscribed client receives that action and dispatches it to their own reducer.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

### Installation

1.  Start development server.

    ```sh
    # start development server
    npm start
    ```

2.  Open the source code and start editing.

    Visit the [create-react-app](https://github.com/facebook/create-react-app) documentation for editing help in development mode.

### 🧐 What's inside?

    .
    ├── node_modules
    ├── public
    ├── src
        ├── components
        ├── state
        ├── AppContext.js
        ├── data.js
        ├── index.css
        ├── index.js
        ├── pubnub.config.json
        ├── pubsub.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

Explanation of important folders and modules:

1.  **`/components`**: This directory contains all of the React component modules.

2.  **`/state`**: This directory contains the modules involved in creating the state using the reducer pattern.

3.  **`.AppContext.js`**: This file exports React context that is used to send state and action creators down to nested components.

4.  **`pubsub.js`**: This file exports a class for interacting with the [PubNub](https://pubnub.com) API.

### ⚙️ State Shape

```javascript
let state = {
  username: "Anonymous",
  messages: [
    {
      text: "",
      createdBy: "",
      createdAt: date,
      id: uuid,
    },
  ],
  emojiMap: {
    messageId: [
      {
        emoji: "",
        username: "",
      },
    ],
  },
};
```
