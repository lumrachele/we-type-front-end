import React from 'react'
import Stopwatch from './Stopwatch'
import Canvas from './Canvas'

export default class Game extends React.Component{
state= {
  quote: {},
  games: [],
  currentGame: {},
  showQuote: false,
  splitQuote: [],
  currentWordIndex: 0,
  typedWord: "",
  correctTypedWord: "",
  backgroundColor: "",
  disabled: true

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
    .then(this.splitQuote)
  }


  handleChange=(event)=>{
    event.persist()
    this.setState({
      typedWord: event.target.value
    })
    if(event.target.value!==this.state.splitQuote[this.state.currentWordIndex]){
      this.setState({
        backgroundColor: "rgb(255, 0, 0, 0.7)",
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
  }

  }

      // this is where we want to start the timer, either when user begins
      //typing, or when user clicks start button

  startGame=()=>{
    this.setState({
      showQuote: true
    })
  }

  splitQuote= () => {
    const splitQuote= this.state.currentGame.quote.content.split(' ')
    this.setState({
      splitQuote: splitQuote
    })
  }

  matchWords = (event)=>{
    event.preventDefault()
    // if (this.state.typedWord===""){
    //   //want to disable submit
    // }
    if(this.state.typedWord===this.state.splitQuote[this.state.currentWordIndex]
  ){this.setState({
    currentWordIndex: this.state.currentWordIndex+1,
    typedWord: "",
    correctTypedWord: "",
    disabled: true
  }, ()=>{
    console.log(
    this.state.currentWordIndex
  )})

  }


  //   const changeColor = this.state.splitQuote.map((word)=>{
  //     if(this.state.typedWord===word){
  //       return this.state.splitQuote[this.state.currentWordIndex].style.color("red")
  //       }
  //       else {
  //         return word
  //       }
  //   })
  //   this.setState({
  //     splitQuote: changeColor
  //   })
  //   return changeColor
  }

  render(){
    return(
      <>
      <h1>GAME!</h1>
      <Canvas />
      {this.state.showQuote &&
        <>
        <p>{this.state.splitQuote.join(' ')} by {this.state.currentGame.quote.author}</p>
        <form onSubmit={this.matchWords}>
          <input style={{backgroundColor: this.state.backgroundColor}} id="user-input" type="text" name="userInput" onChange={this.handleChange} value={this.state.typedWord}/>
          <input type="submit" disabled={this.state.disabled} value="Submit"/>
        </form>
      </>}
      <Stopwatch startGame={this.startGame}/>
      </>
    )
  }
}
