import React from 'react';


export default class Score extends React.Component {


render() {
  console.log(this.props.scores)
  return(
    <div className= 'scoreboard'>
    <h2> Scoreboard </h2>
    {this.props.scores.map(score=>{
      return <p key={score.id}>{score.username}, {score.score}</p>
    })}

    </div>
  )
}


}
