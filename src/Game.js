import React from 'react'
import Stopwatch from './Stopwatch'
import Canvas from './Canvas'
import Score from './Score'

export default class Game extends React.Component{
state= {
  quote: {},
  games: [],
  // this.props.currentGame: {},
  showQuote: false,
  splitQuote: [],
  currentWordIndex: 0,
  typedWord: "",
  correctTypedWord: "",
  backgroundColor: "",
  disabled: true,
  status: false

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
      showQuote: true
    })
  }

componentDidMount() {
  this.splitQuote()
}
  splitQuote= () => {
    const splitQuote= this.props.currentGame.quote.content.split(' ')
    this.setState({
      splitQuote: splitQuote
    })
  }

  matchWords = (event)=>{
    event.preventDefault()

    if(this.state.typedWord===this.state.splitQuote[this.state.currentWordIndex]
  ){
    this.setState({
    currentWordIndex: this.state.currentWordIndex+1,
    typedWord: "",
    correctTypedWord: "",
    disabled: true
  })
  }

    //
    // const changeColor = this.state.splitQuote.map((word)=>{
    //   if(this.state.typedWord===word){
    //     return this.state.splitQuote[this.state.currentWordIndex].style.underline
    //     }
    //     else {
    //       return word
    //     }
    // })
    // this.setState({
    //   splitQuote: changeColor
    // })
    // return changeColor
  }

  render(){
    return(
      <>
      <h1>GAME!</h1>
      <Canvas />
      {this.state.showQuote &&
        <>
        <p>{this.state.splitQuote.join(' ')} by {this.props.currentGame.quote.author}</p>
        {this.state.currentWordIndex < this.state.splitQuote.length &&
          <form onSubmit={this.matchWords}>
            <input style={{backgroundColor: this.state.backgroundColor}} id="user-input" type="text" name="userInput" onChange={this.handleChange} value={this.state.typedWord}/>
            <input type="submit" disabled={this.state.disabled} value="Submit"/>
          </form>
        }

      </>}
        <Stopwatch startGame={this.startGame} quoteLength={this.state.splitQuote.length} currentWordIndex={this.state.currentWordIndex} status={this.state.status}/>
      </>
    )
  }
}
