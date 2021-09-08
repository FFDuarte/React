import React, {useState,useRef} from 'react';
import Avatar  from '@material-ui/core/Avatar';
import Menu  from '@material-ui/core/Menu';
import MenuItem  from '@material-ui/core/MenuItem';
import { useSelector , useDispatch} from 'react-redux';
import { signOut } from '../../../../actions/accountActions';
import { useHistory }  from 'react-router-dom';

function Account(){
    const account = useSelector((state) => state.account);
    const  [isOpen,setOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const isAuthenticated = !!account.user;
    let history = useHistory();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleSignOut = () =>{
        handleClose();
        dispatch(signOut());
        history.push("/");
    }
    return (
        <>
            <Avatar ref={ref} onClick={handleOpen} alt="Remy Sharp"   src={account.user && account.user.avatar}> </Avatar> 
            {
                isAuthenticated
                ?<Menu anchorEl={ref.current}  anchorOrigin={{ vertical: 'bottom' , horizontal: 'center'}} open={isOpen} onClose={handleClose} getContentAnchorEl={null}> 
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Meus Favoritos</MenuItem>
                <MenuItem>Meus Posts</MenuItem>
                <MenuItem>Minhas Conexões</MenuItem>
                <MenuItem>Configurações</MenuItem>
                <MenuItem onClick={handleSignOut}>Sair</MenuItem>
             </Menu>
             :<Menu anchorEl={ref.current}  anchorOrigin={{ vertical: 'bottom' , horizontal: 'center'}} open={isOpen} onClose={handleClose} getContentAnchorEl={null}> 
             <MenuItem>Entrar</MenuItem>
             <MenuItem>Cadastrar</MenuItem>
             <MenuItem onClick={handleSignOut}>Sair</MenuItem>
          </Menu>
            }
        </>
    );
}

export default Account;