<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.realmohsin.com/favicon.ico" width="60" />
  </a>
</p>
<h1 align="center">
  Reaction
</h1>

Reaction is a text-board that allows users to react to messages in real time. It uses [PubNub](https://pubnub.com) to implement the Publish-Subscribe software pattern.

### 🚀 Quick start

1.  **Start development server.**

    ```sh
    # start development server
    npm start
    ```

2.  **Open the source code and start editing.**

    Visit the [create-react-app](https://github.com/facebook/create-react-app) documentation for editing help in development mode.

### 🧐 What's inside?

A quick look at the top-level files and directories you'll see in the project.
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

Explanation of relevant folders and modules:

1.  **`/components`**: This directory contains all of the React component modules.

2.  **`/state`**: This directory contains the modules involved in creating the reducer pattern for the state of the application.

3.  **`.AppContext.js`**: This file creates a React context that is used to send state and state-changing functions down to nested components.

4.  **`pubsub.js`**: This file creates a class for interacting with the [PubNub](https://pubnub.com) API.

### 💫 State Shape

    ```js

let state =
{
username: 'Anonymous',
messages: [{
text: '',
createdBy: '',
createdAt: date,
id: uuid
}],
emojiMap: {
messageId: [{
emoji: '',
username: ''
}]
}
}

```

```
