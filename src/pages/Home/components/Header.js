import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import SvgIcon  from '@material-ui/core/SvgIcon';
import  { Bell } from 'react-feather';
import Avatar  from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';


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
    button: {
        marginRight: 10,
    },
    bell: {
        marginRight: 10,
    },
    avatar:{
        marginRight: 10,
      
    }
    
});

function Header(){
    const classes = useStyles();
    const account = useSelector (state => state.account)  ;

    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar} >
                <ToolBar>
                    <img src="/images/logo.png" alt="logo" className={classes.img}></img>

                    <div className={classes.grow}></div>

                   
                    <div className={classes.userSection}>
                        <Button color="primary" variant="contained" className={classes.button}>
                            Novo Post
                        </Button>
                        <SvgIcon className={classes.bell} > 
                            <Bell  ></Bell>
                        </SvgIcon>
                    </div>
                    <div className={classes.userSection}>
                        <Avatar alt="Remy Sharp"  className={classes.avatar} src={account.user && account.user.avatar}> </Avatar> 
                    </div>


                </ToolBar>
            </AppBar>
    );
}

export default Header;