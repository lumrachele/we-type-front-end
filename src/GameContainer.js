import React, { Component } from 'react';
import Game from './Game'


class GameContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      confirmedUser: this.props.currentUser,
      startedGame: false
    }
  }

  componentDidMount () {
    fetch('http://localhost:3000/api/v1/users/')
    .then(res=>res.json())
    .then(allUsers=>{
      this.setState({
        confirmedUser: allUsers.find(user=>{
        return user.email === this.props.currentUser.email
      })
    })
    })
  }


  displayUser=()=>{
    return this.state.confirmedUser.name
  }

  handleStartGame=(event)=>{
    console.log(event.target)
    this.setState({
      startedGame: true
    })
  }


  render() {

    return (
      <div className="GameContainer">

        <h2>Hey, {this.displayUser()}!</h2>
        { this.state.startedGame ? <Game /> : <button onClick={this.handleStartGame}>Start a new game</button>

        }
      </div>
    );
  }
}

export default GameContainer;
