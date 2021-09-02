import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import  Typography  from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh'
    },
    left:{
        background: 'blue',
        flexGrow: 0,
        flexBasis: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center '

    },
    right: {
        background: 'yellow',
        flexGrow: 0,
        flexBasis: '40%'
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        margin: '64px 32px',
        alignItems: 'center'
    }
}))

function SingIn(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.left}>
                <Typography style={{color:'#FFF', fontSize:35, lineHeight: '45px' }}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software</strong>
                </Typography>
                <Typography variant="body2" style={{color:'rgb(255,255,255,0.7', fontSize:15, lineHeight: '30 px' , marginTop:30 }}>
                    <strong>Compartilhe seu conhecimento com toda nossa rede de desenvolvedores</strong>
                </Typography>
            </div>  
            <div className={classes.right}>
                <form className={classes.form}>
                    <h4>Acesso</h4>
                    <input></input>
                    <input></input>
                </form>
            </div>
        </div>

    )
}

export default SingIn;