import React, { useState } from 'react'
import { AppBar, makeStyles, IconButton, Toolbar} from '@material-ui/core' //  look into using by wrappeing the themeProvider in: responsiveFontSizes
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded'
import DrawerOpener from './Drawer'
import { Drawer } from '@material-ui/core'

const useStyles = makeStyles((theme)=> ((
    console.log(theme),
    {
    
    appBar:{
        background: 'rgba(255, 255, 255, .5)'
    },
    title:{
        color: 'rgba(23, 84, 236, 1)',
        flexGrow: '1', 
        fontFamily: 'DM sans', 
        fontSize: '3.1875rem'
        
    },
    icon:{
        color: 'rgba(23, 84, 236, 1)',
        fontSize: '3rem'
    },

})))


export default function Header () {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const toggleDrawer = (open) => () => (
        setOpen(open)
    )
    return (
        <div>
            <AppBar className={classes.appBar} elevation={0} >
                <Toolbar>
                    <DirectionsRunRoundedIcon fontSize='large' style={{color: 'rgba(23, 84, 236, 1'}}/>
                    <h1 className={classes.title}>Dental Dash</h1>
                    <IconButton onClick={toggleDrawer(true)}>
                    {/* open={DrawerOpener} */}
                        <MenuRoundedIcon className={classes.icon}/>
                    </IconButton>
                        <Drawer anchor={'right'} open={open} onclose={toggleDrawer(false)}><p onClick={toggleDrawer(false)}>this is it </p></Drawer>
                </Toolbar>
            </AppBar>
    
        </div>
    )
}