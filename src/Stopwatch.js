import React from 'react'
import Score from './Score'

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
            {clearInterval(this.timer)}
            <Score finishedTime= {this.state.finishedTime} quoteLength={this.props.quoteLength}/>
          </React.Fragment>
        }
      </div>
    );
  }

}
