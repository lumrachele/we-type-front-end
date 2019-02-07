import React from 'react'
import Stopwatch from './Stopwatch'

export default class Game extends React.Component{

//when you click start, this will
// render the quote
// start the timer - setinterval
// render an input form

  handleChange=(event)=>{
    console.log(event.target.value);
  }

      // this is where we want to start the timer, either when user begins
      //typing, or when user clicks start button




  render(){
    return(<>
      <h1>GAME!</h1>
      <p>Canvas goes here</p>
      <input type="text" name="userInput" onChange={this.handleChange}/>
      <Stopwatch />
      </>
    )
  }
}
