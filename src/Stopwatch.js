import React from 'react'
// import Score from './Score'

export default class Stopwatch extends React.Component{
  state = {
    status: this.props.status,
    runningTime: 0,
    finishedTime: null
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

  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        { this.props.currentWordIndex < this.props.quoteLength ?
          <>
          <p>{Math.floor(runningTime/1000)} s</p>
        <button onClick={this.handleClick}>{status ? 'Pause' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
        </>
        :
          <React.Fragment>
                <h1> Your Score: {this.calculateScore()} words per minute</h1>
          </React.Fragment>
        }
      </div>
    );
  }

}
