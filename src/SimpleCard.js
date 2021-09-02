import React, { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Grid, Container, Dialog, useTheme, useMediaQuery, DialogContentText, Box, Avatar } from '@material-ui/core'
import content from './CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
// import Chart from './Chart'
import GoalSelector from './GoalSelector'
import { AvatarGroup } from '@material-ui/lab'
import { green, yellow, blue } from '@material-ui/core/colors'
import ProgressBar from './ProgressBar'

const useStyles = makeStyles((theme)=>(({
    gridItem:{
      display: 'grid',
      justifySelf: 'center'
    },
    root:{
    display: 'grid',
    placeSelf: 'center', 
    width: '100vw', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gridGap: '1rem', 
    marginTop: '10vh'
    // marginLeft: '3vw'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    body: {
      display: 'grid',
      margin: '16px 0',       
      justifySelf: 'center',

    }, 
    cardBody3:{
      display: 'flex', 
      height: '9vh', 
      paddingTop: '5vh'

    }, 
    
    buttonContainer: {
      marginLeft: '-24px', 
      display: 'flex', 
      justifyContent: 'space-around', 
      flex: '1', 
      // paddingRight: '40vw'
    }, 
    urgentLevel:{
      margin: theme.spacing(4),
      marginLeft: '-24px'
    }
})))

export default function SimpleCard() {
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false)
  // const [state, setState] = useState('')

  const handleClose = () => {
    setOpen(false);
  }
  const ref = useRef(null)

  const handleClickOpen = ()=> {
    setOpen(!open)
    // setState(ref.current)
    // console.log(state)
  }


  return ( 
    <React.Fragment>   
      <CssBaseline/>
      <Container className={classes.root} maxWidth='xl' >
        {content.map( (content, indx) => 
        ((
          <Grid container item 
          className={classes.gridItem}
          direction="column"
          justifyContent="center"
          key={indx}
          large={12}
          medium={12}
          small={12}
          xs={12}
          >
              <Card className={classes.body}>
              <CardContent>
                  <Typography component="h2" fontSize='1rem' ref={ref} value={content}>
                  {content}
                  </Typography>
                  <Typography variant='subtitle2' component="p" className={classes.cardBody3}>
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" onClick={handleClickOpen}>
                      Learn More
                  </Button>
                  <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                  >
                  <DialogTitle id="responsive-dialog-title">{"Create new goal"}</DialogTitle>
                  <DialogContent>
                    <Container maxwidth='xl'>
                      <Typography variant='h4'> Hi Dr. Spencer</Typography>
                      <GoalSelector/>
                      {/* <Chart/> */}
                      <Typography variant='h5'> Assign new task:</Typography>
                      <AvatarGroup>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                      </AvatarGroup>
                      <Container className={classes.urgentLevel}>
                        <Typography variant='h6'> Urgency Level</Typography>
                        <Container maxwidth='xl'className={classes.buttonContainer}>
                          <Button variant='contained' color='secondary' style={{borderRadius: '50px'}}>Critical</Button>
                          <Button variant='contained' style={{borderRadius: '50px', backgroundColor: yellow[500]}}>Critical</Button>
                          <Button variant='contained' color='secondary' style={{borderRadius: '50px', backgroundColor: green[500]}}>Critical</Button>
                          <Button variant='contained' color='secondary' style={{borderRadius: '50px',backgroundColor: blue[500] }}>Critical</Button>
                        </Container>
                      </Container>

                      <ProgressBar/>


                      <Box component='div'></Box>
                      <DialogContentText ref={ref}>
                        nothing to say to you 
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                      </DialogContentText>
                    </Container>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                      close
                    </Button>
                  </DialogActions>
                  </Dialog>
              </CardActions>
              </Card>
          </Grid>
        )))}
    </Container>
  </React.Fragment>
)
}


// classes={{
//   root: classes.root, // class name, e.g. `classes-nesting-root-x`
//   label: classes.label, // class name, e.g. `classes-nesting-label-x`
// }}