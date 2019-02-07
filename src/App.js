import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './GameContainer'
import Login from './Login'

class App extends Component {
  state= {
    loggedIn: false,
    currentUser: null
  }

submitLogin = (info) => {
  this.setState({
    loggedIn: true,
    currentUser: info
  })

}
  render() {
    return (
      <div className="App">
      {this.state.loggedIn ?
      <GameContainer currentUser={this.state.currentUser} submitLogin={this.submitLogin}/>
      :
      <Login submitLogin= {this.submitLogin}/>}

      </div>
    );
  }
}

export default App;
