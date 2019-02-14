import React from 'react';
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
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";


class Main extends React.Component {

displayGames = ()=>{
  return this.props.games.map(game => {
    return (<Grid item key={game.id} game={game} sm={6} md={4} lg={3} className={"grid"} onClick={this.findCard}>
      <Card className={"cards"} id={game.id} onClick={()=>{
        this.props.history.push(`/games/${game.id}`)
        this.props.handleStartGame(game.id)}} >
        <CardMedia
          className={null}
          image={`${game.imageURL}`}
          alt="Image title"
        />
        <CardContent className={null}>

        <Typography>
          <img src={`${game.imageURL}`} alt={game.name} style={{width:"300px", display: "center"}}/>
          </Typography>
        </CardContent>
        <CardActions>

        </CardActions>
      </Card>
    </Grid>
  )}
)
}

  render(){
    console.log(this.props.games)

    return(
      <Grid container spacing={40} onClick={null}>
        {this.displayGames()}
      </Grid>
    )
  }
}

export default withRouter(Main)
