import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    gridContainer:{

    },
    root:{
        display: 'flex', 
        alignSelf: 'center', 
        width: '100%'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    body: {
      margin: '16px 0'
    }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    content.map( (content, indx) => 
    ((
      console.log(content),
      <div className={classes.root} xs={12} key={indx}>
      <Grid container item 
      className={classes.gridContanier}
      direction="column"
      justifyContent="center"
      alignItems="center"
      >
          <Card className={classes.body}>
          <CardContent>
              <Typography variant="h5" component="h2">
              {/* {content} */}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              adjective
              </Typography>
              <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small">Learn More</Button>
          </CardActions>
          </Card>
      </Grid>
  </div>

)))
)
}