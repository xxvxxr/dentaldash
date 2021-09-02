import { Drawer, makeStyles, useTheme } from "@material-ui/core"
import InboxIcon from '@material-ui/icons/Inbox'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MailIcon from '@material-ui/icons/Mail';
import { Divider } from '@material-ui/core'
import { List } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { ListItemIcon } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { IconButton } from "@material-ui/core";
import { useState } from "react"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'


const useStyles = makeStyles((theme)=> (({

})))



export default function DrawerOpener () {
const classes = useStyles()
const theme = useTheme()
const [open, setOpen] = useState(false);


const handleDrawerOpen = () => setOpen(true);

const handleDrawerClose = () => setOpen(false);



<Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="right"
    open={open}
    classes={{
    paper: classes.drawerPaper,
    }}
    >
    <div className={classes.drawerHeader}>
    <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
    </div>
    <Divider />
    <List>
    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        <ListItemText primary={text} />
        </ListItem>
    ))}
    </List>
    <Divider />
    <List>
    {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        <ListItemText primary={text} />
        </ListItem>
    ))}
    </List>
    </Drawer> 

}

