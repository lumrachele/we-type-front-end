import React from 'react';


export default class Score extends React.Component {

// console.log(Math.floor(props.finishedTime/1000));
  calculateScore= ()=> {
  return this.props.quoteLength/Math.floor(this.props.finishedTime/1000)
  };
    render() {
    return (
      <div>
      <h1> Your Score: {this.calculateScore()} </h1>
      </div>
    );

}
}
