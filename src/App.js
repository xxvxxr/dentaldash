import {makeStyles, CssBaseline, Fab} from '@material-ui/core'
import Header from './Header'
import SimpleCard from './SimpleCard'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'


const useStyles = makeStyles((theme)=> ({
  root:{
    minHeight: '100vh',
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    display: 'flex', 
    width: '100vw'
  }, 
  fab:{
    alignSelf: 'flex-end', 
    position: 'relative', 
    right: '4.5vw',
    bottom: '2.5vh',
    color: 'blue'
  },

}))

  
export default function App () {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <SimpleCard/> 
            <Fab className={classes.fab} color='primary'>
                <HelpOutlineOutlinedIcon fontSize='large' style={{color:'white'}}/>
            </Fab>
        </div>
    )
}  


