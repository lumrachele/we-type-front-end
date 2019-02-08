import React from 'react'
import Stopwatch from './Stopwatch'

export default class Game extends React.Component{
state= {
  quote: {},
  games: [],
  currentGame: {},
  showQuote: false,
  currentWord: ''
}
//when you click start, this will
// render the quote
// start the timer - setinterval
// render an input form
  componentDidMount () {
    fetch('http://localhost:3000/api/v1/games')
    .then(response => response.json())
    .then(games => {
      const updatedGames = games.map(game => {
    return {...game, completed: false}
  })
  this.setState({
    games: updatedGames,
    currentGame: updatedGames[0]
  })
})
}

// then(recipes => {
//       const updatedRecipes = recipes.meals.map(recipe => {
//         return {...recipe, selected: false}
//       })
//       this.setState({
//         recipes: updatedRecipes
//       })
//     }
//     )
  handleChange=(event)=>{

  }

      // this is where we want to start the timer, either when user begins
      //typing, or when user clicks start button

  startGame=()=>{
    this.setState({
      showQuote: true
    })
  }
  matchQuote= () => {
    const splitQuote= this.state.currentGame.quote.content.split(' ')

  }

  render(){
    return(
      <>
      <h1>GAME!</h1>
      <p>Canvas goes here</p>
      {this.state.showQuote && <p>{this.state.currentGame.quote.content}, by {this.state.currentGame.quote.author}</p>}
      <input type="text" name="userInput" onChange={this.handleChange}/>
      <Stopwatch startGame={this.startGame}/>
      </>
    )
  }
}
