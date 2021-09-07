import React,{ useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import  Typography  from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/avatar';
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useHistory  } from 'react-router-dom';
import  FormHelperText  from '@material-ui/core/FormHelperText';
import {useSelector, useDispatch} from 'react-redux';
import  {signIn} from '../../actions/accountActions';

const useStyles = makeStyles((theme) => ({

    avatar: {
        margin: theme.spacing(4),
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },
    box:{
        background: '#F0F8FF',
        opacity: '75%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(22),
        margin: theme.spacing(9),
        alignItems: 'center',
        boxShadow: '0px 0px 7px 9px rgba(173,216,230, 0.25)',
        
        height: '50%'
    },
    root: {
        
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        backgroundImage: 'url(../images/posts/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    },
    left:{

        flexGrow: 0,
        flexBasis: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center ',
        padding: theme.spacing(4),
        textAlign: "center",
        marginTop: theme.spacing(-10)

    },
    right: {
        flexGrow: 0,
        flexBasis: '40%',
        
    },
   
    button: {
        marginTop: theme.spacing(2),
        
    },
    copyright:{
        marginTop: theme.spacing(6)
    }
    
}))



function Copyright(){
    const copyrgh = useStyles();
    return(
  

        <Typography variant="body2" align="center" className={copyrgh.copyright}>
            {'Copyright ° '}
            <a color="insert" href="http://forjadigital.epizy.com"  >
                Fabricio Fernando  
            </a>         
            {'   '}
            {new Date().getFullYear()}
        </Typography>
    )
}

function SingIn(){
    const classes = useStyles();
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ errorMessage, setErrorMessage ] = useState();

    const dispatch = useDispatch();
    const account = useSelector( store => store);

    let history = useHistory();
  
    async function handleClick() {

        try{
             await dispatch(signIn(email, password));
                
             history.push("/home");
            }catch(error){
             alert(setErrorMessage.error);
             console.log(error);

        }


    }
    console.log(account);

    return(
        <Grid  container className={classes.root}>
            <Grid item container md={8} className={classes.left}>
                  
                    <Typography style={{color:'#FFF', fontSize:35, lineHeight: '45px' }}>
                        <strong>Simplificando a forma de conectar desenvolvedores de software</strong>
                    </Typography>
                    <Typography variant="body2" style={{color:'rgb(255,255,255,0.7', fontSize:15, lineHeight: '30 px' , marginTop:30 }}>
                        <strong>Compartilhe seu conhecimento com toda nossa rede de desenvolvedores</strong>
                    </Typography>
            </Grid>    
            <Grid item className={classes.right}  >
                <Box className={classes.box} borderRadius="15%" >
                    <Avatar className={classes.avatar}>
                       <LockIcon />
                    </Avatar>
                    <Typography variant="h5">
                        Acesso
                    </Typography>
                    <form>
                        <TextField variant="outlined" margin="normal" required fullWidth id="email" label="email" name="email" autoComplete="email" autoFocus  
                         value={email} onChange={(event) => setEmail(event.target.value)}  />
                        <TextField variant="outlined" margin="normal" required fullWidth id="password" label="Senha" name="password" autoComplete="current-password" autoFocus 
                         value={password} onChange={(event) => setPassword(event.target.value)}   />
                        <Button  fullWidth variant="contained" color="primary" className={classes.button}
                            onClick={handleClick}>
                                Enviar
                        </Button>
                        {
                            errorMessage &&
                            <FormHelperText error>
                                {
                                    errorMessage
                                }
                            </FormHelperText>
                        }
                        <Grid container justifyContent="space-between" >
                            <Grid  item  >
                                <Link href="#">
                                    Esqueceu sua senha ?
                                </Link>
                            </Grid>
                            <Grid item >
                                <Link href="#">
                                    Não tem uma conta ? Registre-se
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright>

                    </Copyright>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SingIn;