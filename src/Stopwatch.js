import React from 'react'
import Score from './Score'

export default class Stopwatch extends React.Component{
  state = {
    status: false,
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
          this.setState({ runningTime: Date.now() - startTime });
        }, 1000);
        this.props.startGame()
      }
      return { status: !state.status, finishedTime: this.state.runningTime };
    });

  };

  handleReset = () => {
      clearInterval(this.timer); // new
      this.setState({ runningTime: 0, status: false });
    };

  componentWillUnmount() {
     clearInterval(this.timer);
  }

  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        <p>{Math.floor(runningTime/1000)} s</p>
        <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
        <Score finishedTime= {this.state.finishedTime} />
      </div>
    );
  }

}
