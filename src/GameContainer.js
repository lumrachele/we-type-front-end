import React, { Component } from 'react';
import Game from './Game'
// import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


class GameContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      // confirmedUser: this.props.currentUser,
      currentGame: {},
      games: [],
      startedGame: false
    }
  }

  componentDidMount () {
    // fetch('http://localhost:3000/api/v1/users/')
    // .then(res=>res.json())
    // .then(allUsers=>{
    //   this.setState({
    //     confirmedUser: allUsers.find(user=>{
    //     return user.email === this.props.currentUser.email
    //   })
    // })
    // })
    fetch('http://localhost:3000/api/v1/games')
    .then(response => response.json())
    .then(games => {
      const updatedGames = games.map(game => {
        return {...game, completed: false}
      })
      this.setState({
        games: updatedGames
      }, console.log(updatedGames))
    })
  }

  // displayUser=()=>{
  //   return this.state.confirmedUser.name
  // }

  displayGames = ()=>{
    return this.state.games.map(game => {
      return (<Grid item key={game.id} game={game} sm={6} md={4} lg={3} onClick={this.findCard}>
        <Card className={null} id={game.id} >
          <CardMedia
            className={null}
            image="rawpixel-749470-unsplash.jpg"
            alt="Image title"
          />
          <CardContent className={null}>
            <Typography gutterBottom variant="h5" component="h2">
              {game.name}
            </Typography>
            <Typography>
              {game.quote.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={()=>{this.handleStartGame(game.id)}} id={game.id} size="small" color="primary">
              Play
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )}
  )
  }

  handleStartGame=(gameId)=>{
    const foundGame= this.state.games.find(game => gameId === game.id)
    console.log(foundGame);
    this.setState({
      startedGame: true,
      currentGame: foundGame
    })
  }


  findCard = (e)=>{
    console.log(e.target)
  }
  //
  // logClick=(e)=>{
  //   console.log(e.target)
  // }


  //when a game ends, start game is set to false
  //then a scoreboard will render on the page
  //this needs to be a create, with prefilled values
  //for score and game_id. just needs the user to fill in
  //his/her name

  render() {

    return (
      <div className="GameContainer">
        <h1>Welcome to WeType</h1>
        { this.state.startedGame ? <Game startGame={this.handleStartGame} currentGame={this.state.currentGame}/> :
          <Grid container spacing={40} onClick={null}>
            {this.displayGames()}
          </Grid>
        }
        
      </div>
    )
  }
}

export default GameContainer;
