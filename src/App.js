import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './GameContainer'
import Login from './Login'
import v4 from 'uuid'

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
createNewUser= (newUserInfo) => {
console.log(newUserInfo);
fetch('http://localhost:3000/api/v1/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify(newUserInfo)
})
.then(response => response.json())
.then(user => this.setState({
  loggedIn: true,
  currentUser: user
}))
}
  render() {
    return (
      <div className="App">
      {this.state.loggedIn ?
      <GameContainer currentUser={this.state.currentUser} submitLogin={this.submitLogin} />
      :
      <Login submitLogin= {this.submitLogin} createNewUser= {this.createNewUser}/>}

      </div>
    );
  }
}

export default App;
