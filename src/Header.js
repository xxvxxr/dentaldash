import React from 'react'
import { AppBar, makeStyles, IconButton, Toolbar } from '@material-ui/core' //  look into using by wrappeing the themeProvider in: responsiveFontSizes
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const useStyles = makeStyles((theme)=> ({
    appBar:{
        background: 'rgba(255, 255, 255, .5)'
    },
    title:{
        color: 'rgba(23, 84, 236, 1)',
        flexGrow: '1'
    },
    icon:{
        color: 'rgba(23, 84, 236, 1)',
        fontSize: '3rem'
    },

}))


export default function Header () {
    const classes = useStyles()
    return (
        <div>
            <AppBar className={classes.appBar} elevation={0} >
                <Toolbar>
                    <h1 className={classes.title}>Dental Dash</h1>
                    <IconButton>
                        <MenuRoundedIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}