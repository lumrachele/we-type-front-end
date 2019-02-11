import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './GameContainer'
// import Login from './Login'

class App extends Component {
  // state= {
  //   loggedIn: false,
  //   currentUser: null
  // }

// submitLogin = (info) => {
//   this.setState({
//     loggedIn: true,
//     currentUser: info
//   })
// }
  render() {
    return (
      <div className="App">
      <GameContainer/>
      </div>
    );
  }
}

export default App;
