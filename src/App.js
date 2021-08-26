import {makeStyles, CssBaseline} from '@material-ui/core'
import Header from './Header'
import SimpleCard from './SimpleCard'
const useStyles = makeStyles((theme)=> ({
  root:{
      minHeight: '100vh',
      backgroundImage: `url(${'https://source.unsplash.com/random/?chic'})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      display: 'flex'
  }, 

}))

  
export default function App () {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <SimpleCard/> 
        </div>
    )
}  


