## WeType: The Frontend

This React web application is the frontend for WeType. WeType is the classic speed-typing game featuring corny dad jokes and famous TV dads.
<a href=https://vimeo.com/332499170>Demo Video</a>

Backend: [WeType Backend Repository](https://github.com/lumrachele/we-type-backend)

<h2>Contents</h2>

* [Libraries & Middleware](#libraries-&-middleware)
* [Installation](#installation)
* [Structure](#structure)
* [Main Components](#main-components)
* [Future Development](#future-development)


# <h2>Libraries & Middleware</h2>
This application was built using [Create React App](https://github.com/facebook/create-react-app). React manages state of the main components. React Router Dom and withRouter are used to manage routes and browser history. This application is styled with Material UI and custom CSS.

# <h2>Installation</h2>
To play WeType, fork and clone this repository, along with the [backend repository](https://github.com/lumrachele/we-type-backend). Run ```npm install``` to install all necessary dependencies, packaged in a ```node_modules``` directory. For the backend, follow the installation instructions there. Then, run ```npm start``` to run the application, and navigate to http://localhost:3001, or any port that differs from that of the backend.

# <h2>Structure</h2>

- app
  - src
    - index.js (Renders App)
    - App.js (Renders the Header and GameContainer components)
    - Header.js (Displays "We Type" CSS animation at the top of the page)
    - GameContainer.js (Defines route paths, and is responsible for the initial fetch for all games. Renders Main and Game components)
    - [Main.js](#main)
    - [Game.js](#game)
    - [Stopwatch.js](#stopwatch)
    - [Modal.js](#modal)
    - [Scoreboard.js](#scoreboard)


# <h2>Main Components</h2>

# - <h3>Main</h3>
```Main.js``` is responsible for displaying each game tile. It is wrapped in a higher order component ```withRouter``` to enable access to browser history for simple route redirection.

# - <h3>Game</h3>
This component is responsible for most of the logic in the game. It displays the quote for the game as well as an input box. It compares each word in the quote with the user's input in sequence, and submission is only available when the words match and the textbox background changes to white from red. It also renders the Stopwatch component. It is rendered at the route ```/games/gameID```

# - <h3>Stopwatch</h3>
Begins an interval when the ```Game``` component is rendered. At the end of the game, this interval's last ```State: runningTime``` is recorded as ```finishedTime``` and then renders the Modal.

# - <h3>Modal</h3>
This component is rendered when a game is complete. It displays the player's score, a celebratory Obama gif, and an input box for a user to enter his/ her name and add it to the scoreboard. Upon submission of the username, the ```Scoreboard.js``` component is rendered, as well as an option to return to the Main Menu, ```Main.js``` and select a new game.

# - <h3>Scoreboard</h3>
Displays the top 10 scores fetched from ```Game.js``` in order from highest to lowest scores.


# <h2>Future Development</h2>
- Abstract code from ```Game.js``` and ```Stopwatch.js``` components to different components for better readability
- Double check ```Stopwatch.js``` component for accurate calculations
- Fix CSS of ```Game.js``` to extend background to full screen
- Have game begin after a 3 second countdown after clicking on a game tile
- Have option to re-render games/ switch up the quotes
- Maybe have a carousel to display one game at a time
- Nav link to view scoreboard
- Allow contributions for quotes
- Login
- Add in progress bar or animation during game
- Highlight or change color or strikethrough each word that's been correctly matched and typed


At this moment, this application is not accepting open source contributions.


You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
