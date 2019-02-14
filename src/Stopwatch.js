import React from 'react'
// import Score from './Score'
import Modal from './Modal'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom'
import Scoreboard from './Scoreboard'




export default class Stopwatch extends React.Component{
  state = {
    status: this.props.status,
    runningTime: 0,
    finishedTime: null,
    username: "",
    show: true,
    showInput: true
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
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
    return Math.round(this.props.quoteLength*60/(this.state.finishedTime/1000))
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
      username: "",
      modal: true,
      showInput: false
    })
  }

  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        { this.props.currentWordIndex < this.props.quoteLength ?
          <>
            <p>{Math.floor(runningTime/1000)} s</p>
            <img src='https://img.icons8.com/ios/2x/start.png' width= '50px' onClick={this.handleClick}/>
          </>
        :


        <Modal show={this.state.show} handleClose={this.hideModal} calculateScore={this.calculateScore()}>
        <br></br>
          <NavLink to="/">Back to Main Menu</NavLink>
          <h2>
          You typed
            <strong style={{color: "#33ccff"}}> {this.calculateScore()} wpm</strong>
          </h2>
          {this.state.showInput?
              <>
                  <img src={"https://media0.giphy.com/media/3o7qDEq2bMbcbPRQ2c/giphy.gif?cid=3640f6095c6491ba515647304177f8f2"} alt={"finished"} style={{width:"320px"}}/>
              <form onSubmit={this.handleSubmit}>
                <label variant="subtitle1">Username:</label>
                <br></br>

                <input autoFocus name="username" type="text" value={this.state.username} onChange={this.handleName}/>
                <input type="submit" value= "Submit"/>

                <input name="username" type="text" value={this.state.username} onChange={this.handleName}/>


              </form>
                    <br></br>
              </>
              :
              <>

              <NavLink activeStyle={{fontSize: "18px", color: "black" }} to="/">Back to Main Menu</NavLink>
              <div>

              <Scoreboard scores={this.props.getScores}/>
              </div>



              </>
          }
          </Modal>

        }
      </div>
    );
  }

}
