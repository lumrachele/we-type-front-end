import React from 'react'
// import Score from './Score'

export default class Stopwatch extends React.Component{
  state = {
    status: this.props.status,
    runningTime: 0,
    finishedTime: null,
    username: ""
  };
  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime, finishedTime: this.state.runningTime});
        }, 1000);
        this.props.startGame()
      }
      return { status: !state.status};
    });
  } ;

  handleReset = () => {
      clearInterval(this.timer); // new
      this.setState({ runningTime: 0, status: false });
    };

  calculateScore= ()=> {
    clearInterval(this.timer)
    return this.props.quoteLength*60/Math.floor(this.state.finishedTime/1000)
  }

  handleName=(event)=>{
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit=(event)=>{
    //points to other function
    event.preventDefault()
    this.props.submitUsername(this.state.username, this.calculateScore())
    this.setState({
      username: ""
    })
  }

  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        { this.props.currentWordIndex < this.props.quoteLength ?
          <>
          <p>{Math.floor(runningTime/1000)} s</p>
        <button onClick={this.handleClick}>{status ? 'Pause' : 'Start'}</button>
        </>
        :
          <React.Fragment>
            <form onSubmit={this.handleSubmit}>
              <h1> Your Score: {this.calculateScore()} words per minute
              </h1>
              <label>Username:</label>
              <br></br>
              <input name="username" type="text" value={this.state.username} onChange={this.handleName}/>
              <input type="submit" value= "Submit"/>
            </form>
          </React.Fragment>
        }
      </div>
    );
  }

}
