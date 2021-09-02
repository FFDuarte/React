import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import  Paper  from '@material-ui/core/Paper';
import  Button  from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';




const useStyles = makeStyles ((theme) => ({
    root: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
      width: 275,
      marginRight: theme.spacing(2)
    },
    button: {
        width: '100%',
    }
}));

const tags=[
    {id: 1, name: 'teste1'},
    {id: 2, name: 'teste2'},
    {id: 3, name: 'teste3'},
    {id: 4, name: 'teste4'},
    {id: 5, name: 'teste5'},
    {id: 6, name: 'teste6'}
]

function NavBar(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.root}>
                Registrar Gratis
            </Button>
            <ListSubheader>{`Tags em alta`}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}>
                            
                        </ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais Tags
            </ListItem>
        </Paper>
    )
}

export default NavBar;