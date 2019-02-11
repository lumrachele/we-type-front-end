import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './GameContainer'
import Login from './Login'
import v4 from 'uuid'

class App extends Component {
  state= {
    loggedIn: false,
    currentUser: null,
    editUser: null,
    userId: null
  }

submitLogin = (info) => {
  this.setState({
    loggedIn: true,
    currentUser: info
  })
}
createNewUser= (newUserInfo) => {
// console.log(newUserInfo);
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
  currentUser: user,
  userId: user.id
}))
}
changeUser= (userInfo) => {
  this.setState({
    editUser:true,
    loggedIn: false,
    currentUser: userInfo
  })
}
editUserInfo=(userInfo)=> {
  console.log(this.state.currentUser)
  fetch(`http://localhost:3000/api/v1/users/${this.state.currentUser.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
    name: userInfo.name,
    email: userInfo.email
  })
  })
  .then(response => response.json())
  .then(user => console.log(user))
}
  render() {
    return (
      <div className="App">
      {this.state.loggedIn ?
      <GameContainer currentUser={this.state.currentUser} submitLogin={this.submitLogin} changeUser={this.changeUser}/>
      :
      <Login submitLogin= {this.submitLogin} createNewUser= {this.createNewUser} changeUser={this.changeUser}
        editUser={this.state.editUser} currentUser={this.state.currentUser}
        editUserInfo={this.editUserInfo}/>}

      </div>
    );
  }
}

export default App;
