import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Account from './Account';
import Notifications from './Notifications';
import Box from '@material-ui/core/Box';
import WritePost from './WritePost';

const useStyles = makeStyles({
    appBar: {

    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flexGrow',
        alignItems: 'center'
    },
    avatar:{
        marginRight: 10,
      
    },
   
    
});

function Header(){
    const classes = useStyles();

    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar} >
                <ToolBar>
                    <img src="/images/logo.png" alt="logo" className={classes.img}></img>

                    <div className={classes.grow}></div>

                   
                    <div className={classes.userSection}>
                        <WritePost></WritePost>
                    </div>
                    <div>
                        <Box ml={2}>
                         <Notifications/> 
                       </Box>  
                    </div>
                    <div className={classes.userSection}>
                        <Box ml={2}>
                            <Account />  
                        </Box>
                    </div>


                </ToolBar>
            </AppBar>
    );
}

export default Header;