import React from 'react';


export default class Score extends React.Component {

  // state={
  //   startIndex: 0
  // }

  sortByHighestScore=()=>{
    return this.props.scores.sort((a, b)=>{
      return b.score - a.score
    })
  }

  // showTen = (index)=>{
  //   return this.sortByHighestScore().slice(index, index+10)
  // }

render() {
  return(
    <div className= 'scoreboard'>

        <table className="table">
          <h2> Scoreboard </h2>
          <tbody>
            <tr>
              <th>
                <h3> Username
                </h3>
              </th>
              <th>
                <h3> Score
                </h3>
              </th>
            </tr>
              {this.sortByHighestScore().slice(0, 10).map(score=>{
                return <tr key={score.id}>
                          <td>{score.username}
                          </td>
                          <td>{score.score}
                          </td>
                      </tr>
              })}
          </tbody>
        </table>
      </div>
  )
}


}
