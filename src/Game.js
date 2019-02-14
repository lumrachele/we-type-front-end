import React from 'react'
import Stopwatch from './Stopwatch'
import Canvas from './Canvas'
import Score from './Score'
import Scoreboard from './Scoreboard'
import Main from './Main'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom'


import Highlighter from "react-highlight-words"


var Highlight = require('react-highlighter');

class Game extends React.Component{
state= {
  quote: {},
  games: [],
  // this.props.currentGame: {},
  // showQuote: false,
  splitQuote: [],
  currentWordIndex: 0,
  typedWord: "",
  correctTypedWord: "",
  backgroundColor: "",
  disabled: true,
  status: false,
  scores: [],
  showInput: false,
  show: false,
  highlight:[]

}
//
componentDidMount() {
  this.splitQuote()
  // this.spanTagsForSplitQuote()
  // this.input.focus()
  fetch('http://localhost:3000/api/v1/scores')
  .then(response => response.json())
  .then(scores=> this.setState({
    scores: scores
  }))
}

//when you click start, this will
// render the quote
// start the timer - setinterval
// render an input form
  // componentDidMount () {
  //   fetch('http://localhost:3000/api/v1/games')
  //   .then(response => response.json())
  //   .then(games => {
  //     const updatedGames = games.map(game => {
  //       return {...game, completed: false}
  //     })
  //     this.setState({
  //       games: updatedGames,
  //       this.props.currentGame: updatedGames[0]
  //     }, console.log(updatedGames))
  //   })
  //   .then(this.splitQuote)
  // }


  handleChange=(event)=>{
    event.persist()

    console.log(event.target.value)
    if (event.target.value === " " ) {
      event.target.value = ""
    }
    //debugger
    this.setState({
      typedWord: event.target.value
    })

  if(event.target.value!==this.state.splitQuote[this.state.currentWordIndex]){

    this.setState({
      backgroundColor: "rgb(255, 0, 0, 0.5)",
      disabled: true
    })
  }
  else if( event.target.value===this.state.splitQuote[this.state.currentWordIndex])
  {
  this.setState({
    correctTypedWord: event.target.value,
    backgroundColor: "",
    disabled: false
  })
  } else if (this.state.currentWordIndex === this.state.splitQuote.length-1){
  this.setState({
    disabled: true
  })
  }

}

      // this is where we want to start the timer, either when user begins
      //typing, or when user clicks start button

  startGame=()=>{
    this.setState({
      showInput: true
    })
  }

  splitQuote= () => {
    const splitQuote= this.props.currentGame.quote.content.split(' ')
    this.setState({
      splitQuote: splitQuote
    })
  }

  matchWords = ()=>{
    if(this.state.typedWord===this.state.splitQuote[this.state.currentWordIndex]){
      this.setState({
      currentWordIndex: this.state.currentWordIndex+1,
      typedWord: "",
      correctTypedWord: "",
      disabled: true,
      highlight: [...this.state.highlight, this.state.splitQuote[this.state.currentWordIndex]]
      })

    }
  }

  handleKeyDown=(event)=>{
    if(event.key === " " && this.state.correctTypedWord){
      this.matchWords()
    }else{
      return null
    }
  }

  submitUsername = (newUsername, score)=>{
    fetch('http://localhost:3000/api/v1/scores', {method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },body: JSON.stringify({score:{
      game_id: this.props.currentGame.id,
      score: score,
      username: newUsername
    }
      })
    })
    .then(res=>res.json())
    .then(score=>this.setState({
      scores: [...this.state.scores, score]
    }))
  }

  getScores = ()=>{
    return this.state.scores
  }

  toggleModal=()=>{
    this.setState({
      show: !this.state.show
    })
  }

  //when the user finishes typing/ ends the game,
  // it should toggle modal to be true
getHighlight=()=>{
  return this.state.highlight
}

  render(){
    console.log(this.state.highlight)
    return(
    <>
      <nav>
        <NavLink activeStyle={{fontSize: "18px", color: "blue" }} to="/">Back to Main Menu</NavLink>
      </nav>

      <h3>Let's Type!</h3>



          <p>
          <Highlighter
            searchWords={this.getHighlight()}
            textToHighlight={this.state.splitQuote.join(' ')}
          />
      </p>
        <p>by {this.props.currentGame.quote.author}</p>


        {this.state.showInput &&
            <input style={{backgroundColor: this.state.backgroundColor, height: '50px', width: '300px'}}  id="user-input" type="text" name="userInput" onChange={this.handleChange} value={this.state.typedWord}
             onKeyDown={this.handleKeyDown}/>}

        <Stopwatch startGame={this.startGame} quoteLength={this.state.splitQuote.length} currentWordIndex={this.state.currentWordIndex} status={this.state.status}
        currentGame={this.props.currentGame}
        submitUsername = {this.submitUsername}
        show={this.state.show}
        toggleModal={this.toggleModal}
        getScores={this.getScores()}
        />

      </>
    )
  }
}

export default withRouter(Game)
