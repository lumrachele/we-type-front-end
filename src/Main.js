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

export default class Main extends React.Component {

displayGames = ()=>{
  return this.props.games.map(game => {
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
          <Button onClick={()=>{this.props.handleStartGame(game.id)}} id={game.id} size="small" color="primary">
            Play
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )}
)
}

  render(){
    return(
      <Grid container spacing={40} onClick={null}>
        {this.displayGames()}
      </Grid>
    )
  }


}
