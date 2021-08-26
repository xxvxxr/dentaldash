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
    <div className={classes.root} xs={12}>
        <Grid container item 
        className={classes.gridContainer}
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        // xs={12}
        >
            <Card className={classes.body}>
            <CardContent>
                <Typography variant="h5" component="h2">
                Doctor
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
            <Card className={classes.body}>
            <CardContent>
                <Typography variant="h5" component="h2">
                Doctor
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
  )
}